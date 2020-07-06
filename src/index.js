import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import serviceWorker from "./serviceWorker";
import "./compiledScss/App.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
