import "./App.css";
import React from "react";
import AppRoutes from "./Routes/Routes";
import { DataContextProvider } from "./Context/DataContext";
import { SearchContextProvider } from "./Context/SearchContext";
import { ThemesProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemesProvider>
      <DataContextProvider>
        <SearchContextProvider>
          <AppRoutes />
        </SearchContextProvider>
      </DataContextProvider>
    </ThemesProvider>
  );
}

export default App;
