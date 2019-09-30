import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { searchCats } from "./reducers.js";
import "tachyons";

const logger = createLogger();
const store = createStore(searchCats, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//On passe le store en props à App -> <App store={store} />
// On mets App entre Provider et en passant le store en props à Provider, tous les components
// auront accès au Store, ils nous faut utiliser connect pour finir

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
