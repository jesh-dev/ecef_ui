import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyForm from "./Pages/Register";
import { Content } from "./Pages/Product";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import DonationPage from "./Dashboard/DonationPage";
import Verify from "./Pages/Verify";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<MyForm />} />
          <Route path="/product" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donate" element={<DonationPage />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
