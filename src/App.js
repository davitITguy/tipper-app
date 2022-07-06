import "./App.scss";
import Home from "./pages/Home";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tip from "./pages/Tippage/Tip";
import { useEffect } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tippage" element={<Tip />} />
      </Routes>
    </div>
  );
}

export default App;
