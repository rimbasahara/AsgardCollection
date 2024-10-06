import NavbarLogo from "../assets/logo/NavLogo.png";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-4 px-lg-5">
        <div className="navbar-left">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className={`nav-link ${
                    location.pathname === "/login" ? "active" : ""
                  }`}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cartlist"
                  className={`nav-link ${
                    location.pathname === "/Cart" ? "active" : ""
                  }`}
                >
                  Cart Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <img src={NavbarLogo} alt="Navbar-Logo" className="navbar-brand" />
          </Link>
        </div>
        <div className="navbar-right">
          <form className="d-flex">
            <button
              type="submit"
              className="btn btn-outline-dark position-relative"
            >
              <span className="position-absolute top-0 ms-1 start-90 translate-middle badge rounded-pill bg-warning">
                0
              </span>
              <i className="bi-cart-fill me-1"></i>
              Cart
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
