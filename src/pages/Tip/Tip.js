import Profile from "assets/images/ProfilePic.svg";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const Tip = () => {
  const [data, setData] = useState({
    fullName: "Giorgi M.",
    workplace: "Czech Beer House",
    profilePicture:
      "https://as1.ftcdn.net/v2/jpg/02/18/96/20/1000_F_218962089_yhRnVKTr3q4Dzvi0Pe2nbXxmB5CYW2GK.jpg",
  });

  const baseURL = "tipping-dev-317246953.eu-central-1.elb.amazonaws.com:8080/";
  const [val, setVal] = useState(0);

  const changeHandler = e => {
    setVal(e.target.value);
  };

  const ammount = useRef(0);

  const getData = () => {
    axios.get(`${baseURL}api/user/info`).then(resp => {
      setData(resp);
      console.log(resp);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <div className="img-container">
        <img src={data?.profilePicture} alt="person" width="100" height="100" />
        <h2>{data?.fullName}</h2>
        <p>{data?.workplace}</p>
      </div>
      <div className="btn-section">
        <button className="btn btn-light tip-btn" onClick={() => setVal(5)}>
          5$
        </button>
        <button className="btn btn-light tip-btn" onClick={() => setVal(10)}>
          10$
        </button>
        <button className="btn btn-light tip-btn" onClick={() => setVal(20)}>
          20$
        </button>
      </div>
      <div className="input-section">
        <form action="https://www.emoney.ge/index.php/main/merchantstransfer" method="post" id="emoney">
          <input type="hidden" name="merchant" defaultValue="TEST_MERCHANT" />
          <input type="hidden" name="ordercode" defaultValue="123456" />
          <input type="hidden" name="amount" value={val * 100} />
          <input type="hidden" name="currency" defaultValue="GEL" />
          <input type="hidden" name="description" defaultValue="Nike Steam II" />
          <input type="hidden" name="customdata" defaultValue="some data" />
          <input type="hidden" name="lng" defaultValue="KA" />

          <input type="hidden" name="successurl" defaultValue="http://tipper.spandera.tech/" />
          <input type="hidden" name="errorurl" defaultValue="http://tipper.spandera.tech/" />
          <input type="hidden" name="cancelurl" defaultValue="http://tipper.spandera.tech/" />
          <input type="hidden" name="callbackurl" defaultValue="http://tipper.spandera.tech/" />

          <label>Custom Amount</label>

          <span>
            $ &nbsp;
            <input
              type="number"
              name="ammount"
              value={val}
              onChange={changeHandler}
              placeholder="0.00"
              step="0.5"
              min="0"
            />
          </span>
        </form>

        <button form="emoney" type="submit" className="btn btn-dark">
          Give Tip
        </button>
      </div>
    </main>
  );
};

export default Tip;
