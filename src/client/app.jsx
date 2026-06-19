import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import Dashboard from "./components/dashboard/dashboard.jsx";
import Ranking from "./components/ranking/ranking.jsx";
import Compare from "./components/compare/compare.jsx";
import Player from "./pages/players.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="ranking" element={<Ranking />} />
        <Route path="compare" element={<Compare />} />
        <Route path="players" element={<Player />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
