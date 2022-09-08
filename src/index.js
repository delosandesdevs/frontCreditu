import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store ={store}>
    <BrowserRouter>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-mz28f1dv.us.auth0.com"
          clientId="bs0g9z6kqdPLW4HIArVuLAOgdOBvuezO"
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);

