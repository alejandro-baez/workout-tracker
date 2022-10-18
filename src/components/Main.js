import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";

const Main = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
