import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";

import exporter from "./store/store.js";

// Import Packages
import { Provider } from "react-redux";

// Import Component

ReactDOM.render(
  <React.StrictMode>
    <Provider store={exporter.store}>
      <PersistGate persistor={exporter.persistStor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
