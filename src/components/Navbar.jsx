
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Ministries", to: "/ministries" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contacts", to: "/contacts" },
  { label: "Become a member", to: "/become-a-member" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="brand-row">
        <Link to="/" className="church-brand" onClick={closeMenu}>
          <img
            className="church-logo"
            src="/images/logo.png"
            alt="Church logo"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="church-brand-text">
            <h1>NEW COVENANT CHURCH U.A.E</h1>
            <p>Making Disciples of All Nations</p>
          </div>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="main-navigation"
        className={`main-navigation ${menuOpen ? "menu-open" : ""}`}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
