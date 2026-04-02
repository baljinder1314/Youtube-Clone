import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slices/toggleSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const toggle = useSelector((state) => state.toggleSlice.sidebar);
  const dispatch = useDispatch();
  return (
    <div
      className={`w-screen h-screen fixed top-0 ${toggle ? "block" : "hidden"} left-0 right-0 bottom-0 z-30 bg-black/40`}
    >
      <div className="sideNav absolute z-10 bg-white w-1/5 h-screen">
        <div
          className="absolute z-30 top-10 right-10 text-2xl cursor-pointer font-black"
          onClick={() => dispatch(toggleMenu())}
        >
          X
        </div>
        <ul className="px-10 space-y-4 pt-20">
          <Link to={`/`}>
            <li className="capitalize font-bold text-xl">home</li>
          </Link>
          <li className="capitalize font-bold text-xl">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
