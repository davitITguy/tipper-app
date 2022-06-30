import mobile from "assets/images/Group12201.png";
import Profile from "assets/images/ProfilePic.svg";

function Home() {
  return (
    <main>
      <div className="img-container">
        <img src={Profile} alt="person" />
        <p>Giorgi M.</p>
        <p>Czech Beer House</p>
      </div>
      <div>
        <button className="btn btn-light">5$</button>
        <button className="btn btn-light">10$</button>
        <button className="btn btn-light">20$</button>
      </div>
      <div>
        <button className="btn btn-dark">Give Tip</button>
      </div>
    </main>
  );
}

export default Home;
