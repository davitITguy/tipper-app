import "./App.scss";
import mobile from "./assets/images/Group12201.png";

function App() {
  return (
    <div className="App">
      <div className="body">
        <h1>TIPPR</h1>
        <h3>Send tips, with in a few taps</h3>
        <img src={mobile} />
        <div className="btns">
          <button className="btn btn-dark">Continue with app</button>
          <button className="btn btn-light">Continue as guest</button>
        </div>
      </div>
    </div>
  );
}

export default App;
