import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles/navbar.module.css";
import { Link } from "react-router-dom";
import useAuthStore from "../services/authStore.js";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();
  const [toggleProfile, setToggleProfile] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const clearPersistedData = useAuthStore((state) => state.clearPersistedData);
  const isAdmin = useAuthStore((state) => state.isAdmin);
  useEffect(() => {
    console.log("Current auth state:", useAuthStore.getState());
  }, [isLoggedIn]);
  const handleProfile = () => {
    setToggleProfile(!toggleProfile);
  };
  const handleLogout = () => {
    logout(); // Wywołaj funkcję logout ze store
    navigate("/"); // Przekieruj na stronę główną
    setToggleProfile(false); // Zamknij menu profilowe
  };

  return (
    <div className={styles.container}>
      <img src="/logo_e_commerce.png" alt="logo" className={styles.logo} />
      <div className={styles.categoriesContainer}>
        <button
          onMouseEnter={() => setToggleMenu(true)}
          onMouseLeave={() => setToggleMenu(false)}
          className={`${styles.buttons} ${styles.button1}`}
        >
          Categories
          <i class="fa-solid fa-arrow-down"></i>
        </button>
        {toggleMenu ? (
          <div
            className={styles.categories}
            onMouseEnter={() => setToggleMenu(true)}
            onMouseLeave={() => setToggleMenu(false)}
          >
            <ul className={styles.categoriesList}>
              <li className={styles.category}>Category 1</li>
              <li className={styles.category}>Category 2</li>
              <li className={styles.category}>Category 3</li>
              <li className={styles.category}>Category 4</li>
              <li className={styles.category}>Category 5</li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.searchContainer}>
        <input
          className={styles.search}
          type="search"
          placeholder="Search products..."
        />
        <button className={styles.btnSearch}>
          Search<i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className={styles.btnRegister}>
        {!isLoggedIn ? (
          <button className={`${styles.buttons} ${styles.button2}`}>
            <Link className={styles.link} to="/Register">
              Register
            </Link>
          </button>
        ) : (
          ""
        )}

        {!isLoggedIn ? (
          <button className={`${styles.buttons} ${styles.button3}`}>
            <Link className={styles.link} to="/Login">
              Login
            </Link>
          </button>
        ) : (
          <div>
            <img
              src="/roshi.jpg"
              alt="avatar"
              className={styles.avatar}
              onMouseEnter={() => setToggleProfile(true)}
              onMouseLeave={() => setToggleProfile(false)}
            />
          </div>
        )}

        {toggleProfile && (
          <div
            className={styles.profileMenu}
            onMouseEnter={() => setToggleProfile(true)}
            onMouseLeave={() => setToggleProfile(false)}
          >
            <ul className={styles.profileList}>
              <li>
                <Link className={styles.link} to="/Profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/Orders">
                  Orders
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/Settings">
                  Settings
                </Link>
              </li>

              {isAdmin() && (<li>
                <Link className={styles.link} to="/Dashboard">
                  Dashboard
                </Link>
              </li>)}

              <li className={styles.link} onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        )}
        <button className={`${styles.buttons} ${styles.button4}`}>
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
