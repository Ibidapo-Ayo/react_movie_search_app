import React from "react";
import logo from "./assets/img/logo.png";
import me from "./assets/img/me.png";
import "./assets/css/style.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo} alt="Cine App" className="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <img
                  src={me}
                  alt="Cine App"
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ibidapo Ayomide
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <p className="dropdown-item">
                      <i className="bx bx-user"></i> Profile
                    </p>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <p className="dropdown-item">
                      <i className="bx bx-exit"></i> Logout
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
