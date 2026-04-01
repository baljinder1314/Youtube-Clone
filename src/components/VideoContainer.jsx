import { useContext } from "react";
import Video from "./Video";
import { store } from "../store/store";
import useFetchVideos from "../customHooks/useFetchVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import {  Link } from 'react-router-dom';

function VideoContainer() {
  const data = useContext(store);
  const fetchVideos = async () => {
    if (!data?.hasMore) {
      return;
    }
    const newData = await useFetchVideos(data?.nextPage, data?.setHasMore);
    data?.setVideoArr((prev) => [...prev, ...newData?.items]);
    data?.setNextPage(newData?.nextPageToken);
  };
  return (
    <div>
      <InfiniteScroll
        className="flex flex-wrap justify-center  items-center"
        dataLength={data?.videoArr?.length}
        next={fetchVideos}
        hasMore={data?.hasMore}
        loader={<h4 className="text-4xl text-green-700 py-10">Loading...</h4>}
      >
        {data?.videoArr?.map((v, i) => (
          <Link to={`/playing?v=${v.id}`} key={i}>
            <Video  data={v} />
          </Link>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default VideoContainer;
