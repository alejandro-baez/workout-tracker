import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./components/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

//! NEED TO CREATE THE FRONT END PORTION AND WITH REDUX AND CONNECT IT TO THE BACKEND
