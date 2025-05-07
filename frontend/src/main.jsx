import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import Navbar from "./components/Navbar.jsx";

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
      {/* Trasy z layoutem (z Navbarem) */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>
);
