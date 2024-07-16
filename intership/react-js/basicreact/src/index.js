import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./contex/appContext";

// const createElement = React.createElement("h1",{},"Deep Patel",  React.createElement("h5",{},"Dip patel"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
