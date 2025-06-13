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
import { UserDashboard } from "./Dashboard/UserDashboard";
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

          <Route
            path="/user"
            element={
              // <ProtectedRoute role="user">
                <UserDashboard />
              // {/* </ProtectedRoute> */}
            }
          />
          <Route path="/register" element={<MyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
