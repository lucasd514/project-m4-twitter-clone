import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CurrentUserProvider } from "./tweet/CreateUserContext";

ReactDOM.render(
  <CurrentUserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CurrentUserProvider>,
  document.getElementById("root")
);
