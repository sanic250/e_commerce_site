import React from "react";
import { useState } from "react";
import styles from "./styles/navbar.module.css";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
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
        <button className={`${styles.buttons} ${styles.button2}`}>
          Register
        </button>
        <button className={`${styles.buttons} ${styles.button3}`}>Login</button>
        <button className={`${styles.buttons} ${styles.button4}`}>
          
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
