// @ts-check
import axios from "axios";
import * as dotenv from "dotenv";
import { calculateRank } from "../calculateRank.js";
import { CustomError, logger, MissingParamError } from "../common/utils.js";

dotenv.config();

/**
 * Fetch Chrome Web Store extension data
 *
 * @param {string} extensionId Chrome Web Store extension ID
 * @returns {Promise<object>} Extension data from Chrome Web Store
 */
const fetchChromeExtensionData = async (extensionId) => {
  try {
    // Chrome Web Store detail page URL
    const url = `https://chrome.google.com/webstore/detail/${extensionId}`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    const html = response.data;

    // Extract user count - format: "10,000+ users" or "1,000,000+ users"
    let userCount = 0;
    const userMatch = html.match(/([0-9,]+)\+?\s*users?/i);
    if (userMatch) {
      userCount = parseInt(userMatch[1].replace(/,/g, ""), 10) || 0;
    }

    // Extract rating - format: "Average rating 4.5 out of 5"
    let rating = 0;
    const ratingMatch =
      html.match(/Average rating\s+([\d.]+)/i) ||
      html.match(/rating"?:?\s*"?([\d.]+)/i);
    if (ratingMatch) {
      rating = parseFloat(ratingMatch[1]) || 0;
    }

    // Extract rating count - format: "1,234 ratings" or "(1,234)"
    let ratingCount = 0;
    const ratingCountMatch =
      html.match(/([0-9,]+)\s*ratings?/i) || html.match(/\(([0-9,]+)\)/);
    if (ratingCountMatch) {
      ratingCount = parseInt(ratingCountMatch[1].replace(/,/g, ""), 10) || 0;
    }

    // Extract extension name from title tag
    let name = "Extension";
    const nameMatch = html.match(/<title>([^<-]+)/i);
    if (nameMatch) {
      name = nameMatch[1].trim();
    }

    // Log for debugging
    logger.log(
      `Extension ${extensionId}: ${userCount} users, ${rating} rating, ${ratingCount} ratings`,
    );

    return {
      extensionId,
      name,
      version: "1.0",
      description: "",
      userCount,
      rating,
      ratingCount,
    };
  } catch (err) {
    logger.error(`Error fetching Chrome extension data: ${err.message}`);
    throw new CustomError(
      `Could not fetch Chrome extension with ID: ${extensionId}`,
      "CHROME_WEBSTORE_ERROR",
    );
  }
};

/**
 * @typedef {import("./types").StatsData} StatsData Stats data.
 */

/**
 * Fetch stats for Chrome extension.
 *
 * @param {string} extensionId Chrome Web Store extension ID.
 * @param {string} developerName Optional developer name to display.
 * @returns {Promise<StatsData>} Stats data.
 */
const fetchStats = async (extensionId, developerName = "Developer") => {
  if (!extensionId) {
    throw new MissingParamError(["extensionId"]);
  }

  const stats = {
    name: "",
    totalUsers: 0,
    totalRatings: 0,
    ratingScore: 0,
    rank: { level: "C", percentile: 100 },
  };

  try {
    const extensionData = await fetchChromeExtensionData(extensionId);

    stats.name = developerName || extensionData.name || "Developer";
    stats.totalUsers = extensionData.userCount;
    stats.totalRatings = extensionData.ratingCount;
    stats.ratingScore = Math.floor(extensionData.rating * 100);

    stats.rank = calculateRank({
      users: stats.totalUsers,
      ratingScore: stats.ratingScore,
      ratingCount: stats.totalRatings,
    });

    return stats;
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

export { fetchStats };
export default fetchStats;
