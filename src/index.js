import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App/App";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
