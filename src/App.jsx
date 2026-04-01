import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { store } from "./store/store";
import useFetchVideos from "./customHooks/useFetchVideos";
import VideoContainer from "./components/VideoContainer";
import {  Outlet} from 'react-router-dom';
function App() {
  const [toggle, setToggle] = useState(false);
  const [videos, setVideos] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [videoArr, setVideoArr] = useState([]);

  useEffect(() => {
    const fetchVideo = async () => {
      const data = await useFetchVideos(nextPage, setHasMore);
      setVideos(data);
      setVideoArr(data?.items);
    };
    fetchVideo();
  }, []);

  return (
    <>
      <store.Provider
        value={{
          toggle,
          setToggle,
          videos,
          nextPage,
          setNextPage,
          setVideos,
          hasMore,
          setHasMore,
          videoArr,
          setVideoArr,
        }}
      >
        <section id="center" className="">
          <Header />
          <Sidebar />
          <Outlet />
        </section>
      </store.Provider>
    </>
  );
}

export default App;
