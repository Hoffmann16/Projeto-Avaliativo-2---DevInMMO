import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  EntryPage,
  GamesCatalogPage,
  MissingPage,
  NewsPage,
  GamePage,
} from "../Pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/games" element={<GamesCatalogPage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
