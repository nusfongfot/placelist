import { useState, useContext, createContext, useEffect } from "react";
import dataJson from "../data/example_data.json";

const AppContext = createContext();

const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cardById, setCardById] = useState([]);

  const handleOnchangeOptions = (e, page) => {
    if (e === "all") {
      setData(dataJson);
      return;
    }
    const filter = dataJson.filter((item) => item.categories.includes(e));
    setData(filter);
  };

  const handleClickById = (id) => {
    const filter = data.filter((item) => item.id === id);
    setCardById(filter);
  };
  useEffect(() => {
    setData(dataJson);
  }, []);

  const shared = {
    data,
    handleOnchangeOptions,
    setData,
    handleClickById,
    cardById,
  };
  return <AppContext.Provider value={shared}>{children}</AppContext.Provider>;
};

export { useAppContext, AppContextProvider };
