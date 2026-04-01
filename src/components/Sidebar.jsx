import { useContext } from "react";
import { store } from "../store/store";

const Sidebar = () => {
    const { toggle, setToggle } = useContext(store)
  return (
    <div className={`w-screen h-screen ${toggle ?"block" :"hidden"} fixed top-0 left-0 right-0 bottom-0 bg-black/40`} onClick={()=>setToggle(prev =>!prev)}>
      <div className="sideNav absolute z-10 bg-white w-1/5 h-screen">
        <ul className="px-10 space-y-2 py-5">
          <li className="capitalize font-bold text-xl">home</li>
          <li className="capitalize font-bold text-xl">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
