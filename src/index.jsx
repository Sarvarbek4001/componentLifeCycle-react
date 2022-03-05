import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "./Context/Theme";
import {Provider as LanguageProvider} from "./Context/Language"

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
