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
        <button className="btn btn-light tip-btn">5$</button>
        <button className="btn btn-light tip-btn">10$</button>
        <button className="btn btn-light tip-btn">20$</button>
      </div>
      <div className="input-section">
        <form>
          <label>Custom Amount</label>
          <input type="text" name="ammount" placeholder="$0,00" />
        </form>
        <button className="btn btn-dark">Give Tip</button>
      </div>
    </main>
  );
};

export default Tip;
