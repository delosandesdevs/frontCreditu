import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store'
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <Auth0Provider
            domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
            clientId={`${process.env.REACT_APP_AUTH0_CLIENT_ID}`}
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);