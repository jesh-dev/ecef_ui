import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyForm from "./Pages/Register";
import { Content } from "./Pages/Product";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import Verify from "./Pages/Verify";
import DonationForm from "./Dashboard/DonationForm";
import ProtectedRoute from "./ProtectedRoute"; // ✅ Import this
import Logout from "./Pages/Logout";
import GuestRoute from "./GuestRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Content />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/logout" element={<Logout />} />

      <Route
          path="/donate"
          element={
            <ProtectedRoute role="user">
              <DonationForm/>
            </ProtectedRoute>
          }
        />
           <Route
          path="/register"
          element={
            <GuestRoute>
              <MyForm />
            </GuestRoute>
          }
        />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
         <Route
          path="/verify"
          element={
            <GuestRoute>
              <Verify />
            </GuestRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
