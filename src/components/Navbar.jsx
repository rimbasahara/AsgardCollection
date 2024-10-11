import NavbarLogo from "../assets/logo/NavLogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleCart = () => {
    if (!isLoggedIn && !token) {
      if (window.confirm("Please login first")) {
        return navigate("/login");
      }
    }
  };

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
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "nav-link isPending"
                      : isActive
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li className="nav-item">
                  <button className="nav-link" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "nav-link isPending"
                        : isActive
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}
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
              onClick={handleCart}
            >
              <span className="position-absolute top-0 ms-1 start-90 translate-middle badge rounded-pill bg-warning">
                {cartCount}
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
