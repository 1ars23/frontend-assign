import React from "react";
import { DataProvider } from "./context/DataContext";
import Users from "./pages/Users";
import "./App.css"; 
import Products from "./pages/Products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
