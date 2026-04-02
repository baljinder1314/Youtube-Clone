import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/toggleSlice";
import { useEffect, useState } from "react";
import { addSearch } from "../slices/searchSice";
import SearchData from "./SearchData";
import { API_KEY } from "../utils/constent";
import { addVideo } from "../slices/videoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchData = useSelector((state) => state.searchSlice.search);
  const [searchState, setSearchState] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!search.trim()) return;

      if (searchData[search] || searchData[search] === search) {
        return;
      }

      useSearch(search);
    }, 1000);

    return () => clearTimeout(id);
  }, [search]);

  const useSearch = async (q) => {
    const search = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`,
    );
    const data = await search.json();
    dispatch(addSearch({ [q]: data[1] }));
  };

  const useSearchVideo = async (s) => {
    const video = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${s}&type=video&key=${API_KEY}`,
    );
    const data = await video.json();
    dispatch(addVideo(data));
  };

  return (
    <>
      <div className="flex border px-10 py-2 items-center justify-between">
        <div className="logo gap-3 w-20 flex">
          <img
            src="/manu.png"
            onClick={() => dispatch(toggleMenu())}
            className="w-10 cursor-pointer"
            alt="menu"
          />
          <img className="w-full" src="/youtube.svg" alt="logo" />
        </div>
        <div className="flex relative w-150 ">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            onFocus={() => setSearchState(true)}
            onBlur={() => setSearchState(false)}
            className="border px-4 py-2 w-full rounded-l-full focus:outline-none  "
          />
          <button className="border px-4 py-2 rounded-r-full"
          onClick={()=>useSearchVideo(search)}>Search</button>
          {searchState && (
            <div className="absolute top-10.5 w-full bg-white max-h-100 ">
              <SearchData
                searchData={searchData[search]}
                useSearchVideo={useSearchVideo}
              />
            </div>
          )}
        </div>
        <div className=" w-20">
          <img className="w-full" src="/user.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
