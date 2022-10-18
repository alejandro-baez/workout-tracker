import { configureStore } from "@reduxjs/toolkit";
import exercisesSlice from "../features/exercises/exercisesSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    exercises: exercisesSlice,
  },
});
