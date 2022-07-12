import Profile from "assets/images/ProfilePic.svg";
import { useEffect, useRef, useState } from "react";

const Tip = () => {
  const [data, setData] = useState({
    fullName: "Giorgi M.",
    workplace: "Czech Beer House",
    profilePicture:
      "https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc",
  });

  const [val, setVal] = useState(0);

  const changeHandler = e => {
    setVal(e.target.value);
  };

  const ammount = useRef(0);

  const getData = () => {
    // axios.get("/").then(resp => {
    //   setData(resp);
    // });
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
          <input
            type="hidden"
            name="successurl"
            defaultValue="www.google.https://www.google.com/search?q=endeavor&sxsrf=ALiCzsZm8MbaQEA4pQGpobFScvlSxdSaDw%3A1657524723773&source=hp&ei=89HLYrSVLPiIxc8PwMakmAY&iflsig=AJiK0e8AAAAAYsvgA47AfsN8QRvt8gu_jLuemg-aO6pQ&ved=0ahUKEwj02vTiqPD4AhV4RPEDHUAjCWMQ4dUDCAc&uact=5&oq=endeavor&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQ0QMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6CwguEIAEELEDENQCOgQILhBDOgcIABDJAxBDOgUIABCSAzoUCC4QgAQQsQMQgwEQxwEQrwEQ1AI6CAguEIAEENQCOgcILhDUAhBDOgUILhCABFCyDFi9EmDFE2gBcAB4AIABnwGIAeAHkgEDMC43mAEAoAEBsAEK&sclient=gws-wiz"
          />
          <input
            type="hidden"
            name="successurl"
            defaultValue="https://www.google.com/search?q=endeavor&sxsrf=ALiCzsZm8MbaQEA4pQGpobFScvlSxdSaDw%3A1657524723773&source=hp&ei=89HLYrSVLPiIxc8PwMakmAY&iflsig=AJiK0e8AAAAAYsvgA47AfsN8QRvt8gu_jLuemg-aO6pQ&ved=0ahUKEwj02vTiqPD4AhV4RPEDHUAjCWMQ4dUDCAc&uact=5&oq=endeavor&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQ0QMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6CwguEIAEELEDENQCOgQILhBDOgcIABDJAxBDOgUIABCSAzoUCC4QgAQQsQMQgwEQxwEQrwEQ1AI6CAguEIAEENQCOgcILhDUAhBDOgUILhCABFCyDFi9EmDFE2gBcAB4AIABnwGIAeAHkgEDMC43mAEAoAEBsAEK&sclient=gws-wiz"
          />
          <input
            type="hidden"
            name="cancelurl"
            defaultValue="https://www.google.com/search?q=endeavor&sxsrf=ALiCzsZm8MbaQEA4pQGpobFScvlSxdSaDw%3A1657524723773&source=hp&ei=89HLYrSVLPiIxc8PwMakmAY&iflsig=AJiK0e8AAAAAYsvgA47AfsN8QRvt8gu_jLuemg-aO6pQ&ved=0ahUKEwj02vTiqPD4AhV4RPEDHUAjCWMQ4dUDCAc&uact=5&oq=endeavor&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQ0QMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6CwguEIAEELEDENQCOgQILhBDOgcIABDJAxBDOgUIABCSAzoUCC4QgAQQsQMQgwEQxwEQrwEQ1AI6CAguEIAEENQCOgcILhDUAhBDOgUILhCABFCyDFi9EmDFE2gBcAB4AIABnwGIAeAHkgEDMC43mAEAoAEBsAEK&sclient=gws-wiz"
          />
          <input
            type="hidden"
            name="callbackurl"
            defaultValue="https://www.google.com/search?q=endeavor&sxsrf=ALiCzsZm8MbaQEA4pQGpobFScvlSxdSaDw%3A1657524723773&source=hp&ei=89HLYrSVLPiIxc8PwMakmAY&iflsig=AJiK0e8AAAAAYsvgA47AfsN8QRvt8gu_jLuemg-aO6pQ&ved=0ahUKEwj02vTiqPD4AhV4RPEDHUAjCWMQ4dUDCAc&uact=5&oq=endeavor&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQ0QMyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQ6BwgjEOoCECc6BAgjECc6CgguEMcBENEDEEM6EQguEIAEELEDEIMBEMcBENEDOggIABCxAxCDAToLCAAQgAQQsQMQgwE6CggAELEDEIMBEEM6CwguEIAEELEDENQCOgQILhBDOgcIABDJAxBDOgUIABCSAzoUCC4QgAQQsQMQgwEQxwEQrwEQ1AI6CAguEIAEENQCOgcILhDUAhBDOgUILhCABFCyDFi9EmDFE2gBcAB4AIABnwGIAeAHkgEDMC43mAEAoAEBsAEK&sclient=gws-wiz"
          />

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
