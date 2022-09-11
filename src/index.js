import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const persistor = persistStore(store);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <Auth0Provider
            domain='dev-mz28f1dv.us.auth0.com'
            clientId='bs0g9z6kqdPLW4HIArVuLAOgdOBvuezO'
            redirectUri={window.location.origin}
          >
            <App />
          </Auth0Provider>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
