import "./App.scss";
import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TipPage from "./pages/Tippage/TipPage";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/tippage" element={<TipPage />} />
        <Route path="/" element={<App />}>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
