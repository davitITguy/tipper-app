import mobile from "assets/images/Group12201.png";
import logo from "assets/images/tipprLogo.png";

function Home() {
  return (
    <main>
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div>
        <img className="mobile-container" src={mobile} />
      </div>
      <div className="btns">
        <button className="btn btn-dark">Continue with app</button>
        <button className="btn btn-light">
          <a href="TipPage.js">Continue as guest</a>
        </button>
      </div>
    </main>
  );
}

export default Home;
