import React from "react";
import Home from "./components/home";
import "./bootstrap/dist/css/bootstrap.min.css";
import "./components/home.css";
import { GbProvider } from "./GbContext/gbContext";

function App() {
  return (
    <GbProvider>
      <div className="app">
        <Home />
      </div>
    </GbProvider>
  );
}

export default App;
