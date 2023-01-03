import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar/index.tsx";
import CreateHero from "./pages/create-hero/index.tsx";
import DeleteHero from "./pages/delete-hero/index.tsx";
import ListHero from "./pages/list/index.tsx";
import PaginationHero from "./pages/pagination/index.tsx";
import UpdateHero from "./pages/update/index.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ListHero />} />
          <Route path="/create" element={<CreateHero />} />
          <Route path="/delete" element={<DeleteHero />} />
          <Route path="/pagination" element={<PaginationHero />} />
          <Route path="/update" element={<UpdateHero />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
