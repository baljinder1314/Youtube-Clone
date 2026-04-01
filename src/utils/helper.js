const formatVideoData = (video) => {
  if (!video) return null;

  const snippet = video?.snippet || {};
  const stats = video?.statistics || {};
  const content = video?.contentDetails || {};

  return {
    id: video?.id || "no-id",

    title: snippet?.title || "No Title",
    description: snippet?.description || "",
    channelTitle: snippet?.channelTitle || "Unknown Channel",

    thumbnail:
      snippet?.thumbnails?.high?.url ||
      snippet?.thumbnails?.medium?.url ||
      snippet?.thumbnails?.default?.url ||
      "",

    publishedAt: snippet?.publishedAt || "",

    views: stats?.viewCount || "0",
    likes: stats?.likeCount || "0",
    comments: stats?.commentCount || "0",

    duration: content?.duration || "PT0M0S",
  };
};

export default formatVideoData


export const formatViews = (views) => {
  if (!views) return "0";

  const num = Number(views);

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(".0", "") + "B";
  }

  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
  }

  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(".0", "") + "K";
  }

  return num.toString();
};

export const timeAgo = (dateString) => {
  if (!dateString) return "";

  const now = new Date();
  const past = new Date(dateString);

  const seconds = Math.floor((now - past) / 1000);

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  return "Just now";
};