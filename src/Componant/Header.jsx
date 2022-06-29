import React from "react";
import logo from "../images/logo.png";

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.getElementById("header").className = "header_sticky";
  } else {
    document.getElementById("header").className = "";
  }
};

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-stream navbar-toggler-icon"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto gap-5 manu_bar">
                  <a className="nav-link active" aria-current="page" href="#Home">
                    <i className="fa-solid fa-house"></i> Home
                  </a>
                  <a className="nav-link" href="#about">
                    <i className="fa-solid fa-user-graduate"></i> about
                  </a>
                  <a className="nav-link" href="#survise">
                    <i className="fa-solid fa-arrows-spin"></i> survise
                  </a>
                  <a className="nav-link" href="#protfolio">
                    <i className="fa-solid fa-book-atlas"></i> protfolio
                  </a>
                  <a className="nav-link" href="#contact">
                    <i className="fa-solid fa-handshake-angle"></i>contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
