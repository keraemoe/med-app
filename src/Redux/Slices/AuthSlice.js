import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH, REGISTER_API, USERS } from "../../constants/api";

export const register = createAsyncThunk(
  "auth/register",
  async (props, { dispatch }) => {
    try {
      const res = await axios.post(USERS, props);
      dispatch(changeStatusAuthed(res));
    } catch (e) {
      dispatch(changeStatusAuthed(false));
    }
  }
);

const auth = createSlice({
  name: "auth",
  initialState: {
    isAuthed: false,
    modalType: "register",
    email: "",
    username: "",
    password: "",
  },
  reducers: {
    changeStatusAuthed: (state, action) => {
      state.isAuthed = action.payload;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    changeTypeOfModal: (state, action) => {
      state.modalType = action.payload;
    },
  },
});

export const { changeStatusAuthed, changeTypeOfModal } = auth.actions;
export default auth.reducer;
