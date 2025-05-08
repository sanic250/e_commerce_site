import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddProducts from "./components/AddProducts.jsx";
import Users from "./components/Users.jsx";
import Orders from "./components/Orders.jsx";
import EditProducts from "./components/EditProducts.jsx";
const RootLayout = () => (
  <>
    <Navbar />
    <main className="content">
      <Outlet /> {/* Tutaj będą renderowane dzieci routingu */}
    </main>
  </>
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Wszystkie trasy z Navbarem */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Trasa dashboard z zagnieżdżonymi ścieżkami */}
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Dashboard />} /> {/* Dla /dashboard */}
          <Route path="addproducts" element={<AddProducts />} />{" "}
          <Route path="editproducts" element={<EditProducts />} />{" "}
          <Route path="users" element={<Users />} />{" "}
          {/* Dla /dashboard/users */}
          <Route path="orders" element={<Orders />} />{" "}
          {/* Dla /dashboard/orders */}
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
