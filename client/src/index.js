import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentUserProvider } from "./components/CreateUserContext";

ReactDOM.render(
  <CurrentUserProvider>
    <App />
  </CurrentUserProvider>,
  document.getElementById("root")
);
