import {  } from "../utils/constent";

const fetchVideos = async (pageToken = "") => {
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${ import.meta.env.VITE_YOUTUBE_ }`;

  if (pageToken) {
    url += `&pageToken=${pageToken}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Fetch failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching videos:", error);
  }
};

export default fetchVideos;