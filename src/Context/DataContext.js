import React, { useContext, useState, createContext, useEffect } from "react";
import { getGamesFromApi, getNewsFromApi } from "../Functions";

const DataContext = createContext();
//criação do contexto

const DataContextProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getGamesFromApi(setGames);
    getNewsFromApi(setNews);
  }, []);

  return (
    <DataContext.Provider value={{ games, news }}>
      {children}
    </DataContext.Provider>
  );
};
//criação do elemento que vai passar o useState para o global

const useData = () => {
  const contextData = useContext(DataContext);
  return contextData;
};
//criação do hook personalizado que passa os valores atribuidos no value

export { DataContextProvider, useData };
