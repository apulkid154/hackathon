import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Searchbar from "./components/Searchbar";

const App = () => {
  const navigate = useNavigate();
  const isHomePage = window.location.pathname === "/";

  return (
    <div>
      <div className="bg-slate-900">
        <Navbar />
        {isHomePage && <Searchbar />}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
