import PlayingVideo from "./PlayingVideo";
import { useSearchParams } from "react-router-dom";
import RelatedContainer from "./RelatedContainer";
import { useSelector } from "react-redux";
import formatVideoData from "../utils/helper";

function PlayingVideoContainer() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const allVideos = useSelector((state) => state.videoSlice.video);
  const selectedVideo = allVideos?.find(
    (v) => (v?.id?.videoId || v?.id) === videoId || v?.id === videoId,
  );

  const videoTitle = formatVideoData(selectedVideo)?.title || "Now Playing";

  return (
    <div className=" p-5 flex gap-4">
      <PlayingVideo videoId={videoId} title={videoTitle} />
      <RelatedContainer />
    </div>
  );
}

export default PlayingVideoContainer;
