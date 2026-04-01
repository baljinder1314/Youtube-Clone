import { API_KEY } from "../utils/constent";

const useFetchVideos = async (nextpage, setHasMore) => {
  let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=in&maxResults=50&key=${API_KEY}`;

  if (nextpage) {
    url += `&nextPageToken=${nextpage}`;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (!data?.nextPageToken) {
      setHasMore(false);
    }
    return data;
  } catch (error) {
    console.log(`Error while feting videos ${error}`);
  }
};

export default useFetchVideos;
