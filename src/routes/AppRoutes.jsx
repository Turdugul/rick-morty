import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CharactersPage from "../pages/Characters.Page";
import CharactersDetail from "../pages/CharactersDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/characters"} />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:characterId" element={<CharactersDetail />} />
      <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>
  );
};

export default AppRoutes;
