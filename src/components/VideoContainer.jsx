import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import InfiniteScroll from "react-infinite-scroll-component";
import { addMoreVideo } from "../slices/videoSlice";
import useFetchVideos from "../customHooks/useFetchVideos";

function VideoContainer() {
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
    <div>
      <InfiniteScroll
        className="flex flex-wrap justify-center  items-center"
        dataLength={video?.length}
        next={fetchVideos}
        hasMore={hasMore}
        // loader={<h4 className="text-4xl text-green-700 py-10">Loading...</h4>}
      >
        {video?.map((v, i) => (
          <Link to={`/playing?v=${ v.id.videoId || v.id }`} key={i}>
            <Video data={v} />
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default VideoContainer;
