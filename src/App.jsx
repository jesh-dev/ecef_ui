import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyForm from "./Pages/Register";
import { Content } from "./Pages/Product";
import About from "./Pages/About";
import Login from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import Verify from "./Pages/Verify";
import ProtectedRoute from "./ProtectedRoute"; // ✅ Import this
import Logout from "./Pages/Logout";
import { UserBoard } from "./Dashboard/Users/UserDashboard";
import PaymentForm from "./Dashboard/Users/UserComponents/PaymentForm";
import PaymentHistory from "./Dashboard/Users/UserComponents/PaymentHistory";
import Overview from "./Dashboard/Users/UserComponents/Overview";
import Profile from "./Dashboard/Users/UserComponents/Profile";
// import GuestRoute from "./GuestRoute";

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
          <Route path="/register" element={<MyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
           {/* ✅ Protected User Route */}
        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute role="user">
              <PaymentForm/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/payHistory"
          element={
            <ProtectedRoute role="user">
              <PaymentHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/overview"
          element={
            <ProtectedRoute role="user">
              <Overview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute role="user">
              <Profile />
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
