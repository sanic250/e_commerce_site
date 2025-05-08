import React from "react";
import styles from "./styles/dashboard.module.css";
import { Link, Outlet } from "react-router-dom"; // Dodaj Outlet

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <img src="/logo_e_commerce.png" alt="logo" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li>
            <Link className={styles.link} to="/">
              {" "}
              {/* Zmieniłem na /dashboard */}
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/dashboard/addproducts">
              {" "}
              {/* Zostawiam */}
              Add Products
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/dashboard/editproducts">
              {" "}
              {/* Zostawiam */}
              Edit Products
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/dashboard/users">
              {" "}
              {/* Zmieniłem na /dashboard/users */}
              Users
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/dashboard/orders">
              {" "}
              {/* Zmieniłem na /dashboard/orders */}
              Orders
            </Link>
          </li>
        </ul>
        <h3>Dashboard</h3>
      </div>

      {/* Główna zawartość - tutaj będą renderowane zagnieżdżone komponenty */}
      <div className={styles.content}>
        <Outlet /> {/* To jest kluczowy element! */}
      </div>
    </div>
  );
};

export default Dashboard;
