import { useState } from "react";

import Submitted from "./Submitted";
import Card from "./Card";
import data from "./data";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [listNum, setListNum] = useState(data);
  const [activeNum, setActiveNum] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitRate = () => {
    if (activeNum === null) {
      toast.error("Please Choose Rating!");
    }
    setIsSubmitted(true);
  };

  return (
    <main className="main">
      <Card
        listNum={listNum}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
        submitRate={submitRate}
        isSubmitted={isSubmitted}
      />
      <Submitted activeNum={activeNum} isSubmitted={isSubmitted} />
      <ToastContainer position="top-right" />
    </main>
  );
};

export default App;
