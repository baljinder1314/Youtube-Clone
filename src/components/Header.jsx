import { useContext, useState } from "react";
import { store } from "../store/store";

const Header = () => {
  const { setToggle } = useContext(store);
  
  return (
    <>
      <div className="flex border px-10 py-2 items-center justify-between">
        <div className="logo gap-3 w-20 flex">
          <img
            src="/manu.png"
            onClick={() => setToggle((prev) => !prev)}
            className="w-10 cursor-pointer"
            alt="menu"
          />
          <img className="w-full" src="/youtube.svg" alt="logo" />
        </div>
        <div className="flex  w-150 ">
          <input
            type="text"
            className="border px-4 py-2 w-full rounded-l-full focus:outline-none  "
          />
          <button className="border px-4 py-2 rounded-r-full">Search</button>
        </div>
        <div className=" w-20">
          <img className="w-full" src="/user.webp" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
