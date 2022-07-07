import mobile from "assets/images/Group12201.png";
import logo from "assets/images/tipprLogo.png";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="logo-container">
        <img src={logo} />
      </div>
      <div>
        <img className="mobile-container" src={mobile} alt="mobile image" />
      </div>
      <div className="btns">
        <button className="btn btn-dark">
          <a href="https://play.google.com/store/games" target="_blank">
            Continue with app
          </a>

          {/* <Link to={{ pathname: "https://play.google.com/store/games" }} target="_blank">
            Continue with app
          </Link> */}
        </button>
        <button className="btn btn-light">
          <Link to="/TipPage">Continue as guest</Link>
        </button>
      </div>
    </main>
  );
};

export default Home;
