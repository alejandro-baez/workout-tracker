import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises } from "../features/exercises/exercisesSlice";
import { fetchUsers } from "../features/users/usersSlice";

const Homepage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  console.log(users);
  const exercises = useSelector((state) => state.exercises.exercises);
  console.log(exercises);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchExercises());
  }, [dispatch]);

  return <div>Homepage</div>;
};

export default Homepage;
