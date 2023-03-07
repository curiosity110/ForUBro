import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: { name: '', token: undefined }
  },
  reducers: {
    login_user: (state, action) => {
      const user = {
        name: action.payload.user.username,
        token: action.payload.access,
      };
      state.data = user
    },
    logout_user: (state) => {
      state.data = { name: '', token: undefined }
    },

  }
})

export const { login_user, logout_user } = userSlice.actions;

export default userSlice.reducer;
