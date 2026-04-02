
import formatVideoData, { formatViews, timeAgo } from "../utils/helper";

function Video({ data }) {
  const cleanData = formatVideoData(data);

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
    <div className="w-100 h-100 hover:bg-gray-600/20 transition-all duration-100 ease-linear py-4 px-4 space-y-2">
      <div className="w-full rounded-2xl h-50  overflow-hidden">
        <div
          className=" bg-center  h-70 w-full"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
      </div>
      <div className="">
        <div className="text-[1.15rem] font-bold">{title}</div>
        <div className="text-gray-800 font-semibold">{channelTitle}</div>
        <div className="text-gray-800 font-semibold">
          {formatViews(views)} views . {timeAgo(publishedAt)}
        </div>
      </div>
    </div>
  );
}

export default Video;
