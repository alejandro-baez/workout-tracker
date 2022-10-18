import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchExercises = createAsyncThunk("exercises/fetch", async () => {
  try {
    const { data } = await axios.get("/api/exercises");
    return data;
  } catch (err) {
    console.err(err);
  }
});

const initialState = {
  exercises: [],
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExercises.fulfilled, (state, action) => {
      state.exercises = action.payload;
    });
  },
});

export default exercisesSlice.reducer;
