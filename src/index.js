import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./serviceWorker.js";
import "./compiledScss/App.css";
window.addEventListener("DOMContentLoaded", (event) => {
  var beforeLoad = document.querySelector(".beforeLoad");
  beforeLoad.style.top = 0;
  beforeLoad.style.width = "100%";
  beforeLoad.style.height = "0%";
  beforeLoad.style.transition = "height 300ms";
});

ReactDOM.render(<App />, document.getElementById("root"));
