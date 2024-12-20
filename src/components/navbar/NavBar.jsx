import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Container */}
      <div className="navbar__logo-container">
        <img src="/fav.png" alt="Logo" className="navbar__logo-img" />
      </div>

      {/* Hamburger Menu */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </div>

      {/* Navigation Links */}
      <div className={`navbar__links ${isMenuOpen ? "active" : ""}`}>
        <Link smooth to="#home" className="navbar__link">
          Home
        </Link>
        <Link smooth to="#about" className="navbar__link">
          About us
        </Link>
        <Link smooth to="#services" className="navbar__link">
          Services
        </Link>
      </div>

      {/* Contact Button */}
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#3b82f6",
          borderRadius: "50px",
          padding: "10px 30px",
          fontSize: "1rem",
          fontWeight: "500",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#2563eb",
          },
        }}
      >
        Contact Us
      </Button>
    </nav>
  );
}
