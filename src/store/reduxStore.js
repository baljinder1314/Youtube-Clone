import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "../slices/videoSlice";
import toggleSlice from "../slices/toggleSlice";
import searchSlice from "../slices/searchSice";

const reduxStore = configureStore({
  reducer: {
    videoSlice,
    toggleSlice,
    searchSlice,
  },
});
export default reduxStore;
