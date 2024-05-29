import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//npm i axios@1.7.2 react-router-dom sass@1.69.5 react-beautiful-dnd@13.1.1 react-date-range@1.4.0 react-icons@4.12.0 redux-persist@6.0.0 @mui/material @emotion/react @emotion/styled @mui/icons-material @reduxjs/toolkit@1.9.7 react-redux@8.1.3
