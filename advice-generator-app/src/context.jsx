import axios from "axios";
import React, { useState, useContext, useEffect } from "react";

const url = "https://api.adviceslip.com/advice";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [advice, setAdvice] = useState("random dad joke");
  const [adviceId, setAdviceId] = useState();

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios(url);

      console.log(data.slip.advice, data.slip.id);

      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchDadJoke();
  }, []);

  return (
    <AppContext.Provider
      value={{
        fetchDadJoke,
        advice,
        adviceId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
