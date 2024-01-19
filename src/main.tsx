import React from "react";
import ReactDOM from "react-dom/client";
//import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";




const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement || document.createElement("div"));
root.render(
  <React.StrictMode>
    <CounterApp value={ 4 }/>
  </React.StrictMode>
);
