import React from "react";
import { MdOutlineDone } from "react-icons/md";

const SuccessModal = () => {
  return (
    <div id="modal">
      <div className="fail">
        <MdOutlineDone size={30} />
        <h2>Transaction Complete</h2>
        <p>Your tip was successfully sent to your server's account</p>
        <div className="fail--btn--divider">
          <button>OK</button>
        </div>
      </div>
    </div>
  );
};
export default SuccessModal;
