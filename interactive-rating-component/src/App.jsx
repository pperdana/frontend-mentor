import { useState } from "react";

import Submitted from "./Submitted";
import Card from "./Card";
import data from "./data";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [listNum, setListNum] = useState(data);
  const [activeNum, setActiveNum] = useState(null);

  const submitRate = () => {
    if (activeNum === null) {
      toast.error("Please Choose Rating!");
    }
  };

  console.log(activeNum);

  return (
    <main className="main">
      <Card
        listNum={listNum}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        submitRate={submitRate}
      />
      <Submitted activeNum={activeNum} />
      <ToastContainer position="top-right" />
    </main>
  );
};

export default App;
