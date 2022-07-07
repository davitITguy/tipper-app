import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDoneOutline } from "react-icons/md";

const Modal = ({ type, closeHandler }) => {
  return (
    <div id="modal">
      <div className={type}>
        <AiFillCloseCircle size={30} />
        <h2>Transaction Complete</h2>
        <p>Your tip was successfully sent to your server's account</p>
        <button onClick={() => closeHandler()}>OK</button>
      </div>
    </div>
  );
};

export default Modal;
