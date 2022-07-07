import "./App.scss";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Tip from "./pages/Tippage/Tip";
import SuccessModal from "components/modals/SuccessModal";
import FailModal from "components/modals/FailModal";
import { useState } from "react";
import Modal from "components/modals/Modal";

const App = () => {
  const [modal, setModal] = useState(true);

  return (
    <div>
      {modal && <Modal type={"fail"} closeHandler={() => setModal(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tippage" element={<Tip />} />
        {/* <Route path="/success" element={<SuccessModal />} />
        <Route path="/fail" element={<FailModal />} /> */}
      </Routes>
    </div>
  );
};

export default App;
