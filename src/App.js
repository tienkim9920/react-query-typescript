import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import CreateHero from "./pages/create-hero";
import DeleteHero from "./pages/delete-hero";
import ListHero from "./pages/list";
import PaginationHero from "./pages/pagination";
import UpdateHero from "./pages/update";

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
