import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";

const FailModal = () => {
  return (
    <div id="modal">
      <div className="fail">
        <AiFillCloseCircle size={30} />
        <h2>Transaction Failed</h2>
        <p>Please check you have sufficient funds available.</p>
        <div className="fail--btn--divider">
          <button>OK</button>
        </div>
      </div>
    </div>
  );
};
export default FailModal;
