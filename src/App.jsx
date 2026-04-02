import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import useFetchVideos from "./customHooks/useFetchVideos";
import { addVideo } from "./slices/videoSlice";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchVideo = async () => {
      const data = await useFetchVideos();
      dispatch(addVideo(data));
    };

    fetchVideo();
  }, []);
  return (
    <>
      <section id="center" className="">
        <Header />
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
}

export default App;
