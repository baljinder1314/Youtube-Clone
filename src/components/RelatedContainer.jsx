import RelatedVideo from "./RelatedVideo";
import { useDispatch, useSelector } from "react-redux";
import useFetchVideos from "../customHooks/useFetchVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import { addMoreVideo } from "../slices/videoSlice";
import { Link } from "react-router-dom";

function RelatedContainer() {
  const video = useSelector((state) => state.videoSlice.video);
  const hasMore = useSelector((state) => state.videoSlice.hasMore);
  const nextPageToken = useSelector((state) => state.videoSlice.nextPageToken);
  const dispatch = useDispatch();
  if (!video) return;

  const fetchVideos = async () => {
    if (!hasMore) return;
    const newData = await useFetchVideos(nextPageToken);
    if (!newData?.items?.length) return;
    dispatch(addMoreVideo(newData));
  };
  return (
    <div
      id="scrollableDiv"
      className="w-full h-170 overflow-y-scroll space-y-5"
    >
      <InfiniteScroll
        className="flex flex-wrap  gap-5 items-center"
        dataLength={video?.length}
        next={fetchVideos}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"

        // loader={<h4 className="text-4xl text-green-700 py-10">Loading...</h4>}
      >
        {video.map((v, i) => (
          <Link to={`/playing?v=${v.id.videoId || v.id}`} key={i}>
            <RelatedVideo  video={v} />
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default RelatedContainer;
