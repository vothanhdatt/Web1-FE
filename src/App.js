
import "./App.css";
import RouteContainer from "./features/index";
import LoadingOverlay from "react-loading-overlay";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <LoadingOverlay active={false} spinner>
      <Router>
        <div className="App">{RouteContainer}</div>
      </Router>
    </LoadingOverlay>
  );
}
export default App;
