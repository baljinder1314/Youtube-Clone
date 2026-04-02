import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: null,
    nextPageToken: "",
    hasMore: true,
  },
  reducers: {
    addVideo: (state, action) => {
      state.video = action.payload.items;
      state.nextPageToken = action.payload.nextPageToken
    },
    addMoreVideo: (state, action) => {
      state.video  = [...state.video,...action.payload.items]
      state.nextPageToken = action.payload.nextPageToken
    },
  },
});

export const { addVideo, addMoreVideo } = videoSlice.actions;

export default videoSlice.reducer;
