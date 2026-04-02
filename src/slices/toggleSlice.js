import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    sidebar: false,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.sidebar = !state.sidebar;
    },
  },
});
export const { toggleMenu } = toggleSlice.actions;
export default toggleSlice.reducer;
