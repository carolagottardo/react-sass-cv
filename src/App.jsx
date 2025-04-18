import React from "react";
import Navie from "./components/Navie/Navie";
import Sectionsy from "./components/Sectionsy/Sectionsy";
import { ThemeProvider } from "./ThemeContext";
import "./index.css";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navie />
        <Sectionsy />
      </div>
    </ThemeProvider>
  );
}

export default App;
