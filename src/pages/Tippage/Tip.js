import Profile from "assets/images/ProfilePic.svg";

const Tip = () => {
  return (
    <main>
      <div className="img-container">
        <img src={Profile} alt="person" />
        <h3>Giorgi M.</h3>
        <p>Czech Beer House</p>
      </div>
      <div className="btn-section">
        <button className="btn btn-light">5$</button>
        <button className="btn btn-light">10$</button>
        <button className="btn btn-light">20$</button>
      </div>
      <div className="input-section">
        <form>
          <input type="text" placeholder="$0,00" />
        </form>
        <button className="btn btn-dark">Give Tip</button>
      </div>
    </main>
  );
};

export default Tip;
