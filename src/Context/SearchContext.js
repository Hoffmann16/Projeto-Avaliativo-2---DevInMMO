import React, { useContext, useState, createContext} from "react";


const SearchContext = createContext();
//criação do contexto

const SearchContextProvider = ({ children }) => {
  const [searchGames, setSearchGames] = useState("");
  const [searchNews, setSearchNews] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchGames,
        setSearchGames,
        searchNews,
        setSearchNews,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
//criação do elemento que vai passar o useState para o global

const useSearch = () => {
  const contextsearch = useContext(SearchContext);
  return contextsearch;
};
//criação do hook personalizado que passa os valores atribuidos no value

export { SearchContextProvider, useSearch };
