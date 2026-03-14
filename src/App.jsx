import React from "react";
import Home from "./pages/Home";
import { ThemeProviderCustom } from "./context/ThemeContext";

import "./assets/Css/Theme.css";
import "./assets/Css/MainStyle.css";

function App() {
  return (
    <ThemeProviderCustom>
      <div className="app-root">
        <Home />
      </div>
    </ThemeProviderCustom>
  );
}

export default App;