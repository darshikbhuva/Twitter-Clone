import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUser: null,
    profile: null,
  },
  reducers: {
    // multiple actions

    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUser = action.payload;
    },
    getMyProfile: (state, action) => {
      state.profile = action.payload;
    },
    followingUpdate: (state, action) => {
      if (state.user.following.includes(action.payload)) {
        // unFollow
        state.user.following = state.user.following.filter((itemsId) => {
          return itemsId !== action.payload;
        });
      } else {
        // follow
        state.user.following.push(action.payload);
      }
    },
  },
});

export const { getUser, getOtherUser, getMyProfile, followingUpdate } =
  userSlice.actions;
export default userSlice.reducer;
