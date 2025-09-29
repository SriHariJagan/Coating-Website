import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "Services", "Color Shades", "Calculator", "About Us", "Contact"];

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <span className={styles.logoIcon}>✦</span>
          <span className={styles.logoText}>BrandName</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className={styles.nav}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button className={styles.menuBtn} onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.showOverlay : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""} ${
          menuOpen ? styles.showLinks : ""
        }`}
      >
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
