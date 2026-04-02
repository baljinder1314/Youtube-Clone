import React from "react";
import formatVideoData, { formatViews, timeAgo } from "../utils/helper";

function RelatedVideo({ video }) {
  const cleanData = formatVideoData(video);

  const {
    channelTitle,
    description,
    id,
    likes,
    publishedAt,
    thumbnail,
    title,
    views,
  } = cleanData;
  return (
    <div className=" w-full  flex gap-4">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="w-50 aspect-video object-cover rounded-lg"
      />

      <div className="">
        <div className="text-xl font-semibold">
          {title.length > 70 ? title.slice(0, 70) : title}...
        </div>
        <div className="font-semibold">{channelTitle}</div>
        <div className="font-semibold">
          {formatViews(views)} . {timeAgo(publishedAt)}
        </div>
      </div>
    </div>
  );
}

export default RelatedVideo;
