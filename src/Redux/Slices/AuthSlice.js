import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { REGISTER_API } from "../../constants/api";

export const register = createAsyncThunk(
  "user/register",
  async (props, { dispatch }) => {
    try {
      await axios.post(REGISTER_API, {
        email: "weekera@gmail.com",
        username: "qweqwe",
        password: "stqweqweqwering",
      });
      dispatch(changeStatusAuthed(true));
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
  },
  reducers: {
    changeStatusAuthed: (state, action) => {
      state.isAuthed = action.payload;
    },
    changeTypeOfModal: (state, action) => {
      state.modalType = action.payload;
    },
  },
});

export const { changeStatusAuthed, changeTypeOfModal } = auth.actions;
export default auth.reducer;
