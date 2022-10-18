import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (err) {
    console.error(err);
  }
});

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(fetchUsers.fulfilled, (state,action) =>{
        state.users = action.payload;
    })
  }
});

export default usersSlice.reducer;
