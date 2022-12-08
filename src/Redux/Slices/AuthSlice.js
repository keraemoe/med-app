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

export const Auth = createAsyncThunk(
  "auth/Auth",
  async (props, { dispatch }) => {
    try {
      const { data } = await axios.post(AUTH, props);
      localStorage.setItem("tokenRefresh", JSON.stringify(data.refresh));
      localStorage.setItem("tokenAccess", JSON.stringify(data.access));
      console.log(data);
      dispatch(changeAuth());
    } catch (e) {
      dispatch(unUhangeAuth());
    }
  }
);

const auth = createSlice({
  name: "auth",
  initialState: {
    isAuthed: false,
    modalType: "register",
    name: "",
    lastname: "",
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
    changeAuth: (state) => {
      state.isAuthed = true;
    },
    unUhangeAuth: (state) => {
      state.isAuthed = false;
    },
  },
});

export const {
  changeStatusAuthed,
  changeTypeOfModal,
  changeAuth,
  unUhangeAuth,
} = auth.actions;
export default auth.reducer;
