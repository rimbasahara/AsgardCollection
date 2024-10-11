import { Link, useNavigate } from "react-router-dom";
import image from "../assets/logo/Logo.jpg";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoginUsers from "../api/loginUsers";
import {
  // setUsername,
  // setPassword,
  setToken,
  setError,
} from "../app/loginReducer";

const Login = () => {
  const [username, setUsernameState] = useState("");
  const [password, setPasswordState] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginUsers(username, password);
      console.log("Response:", response);
      const token = response.token;
      dispatch(setToken(token));
      localStorage.setItem("userToken", token);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={image} alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form onSubmit={handleSubmit}>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas"></i>
                        <span className="h1 fw-bold mb-0">Welcome</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3">
                        Sign into your account m38rmF$
                      </h5>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          className="form-control form-control-lg"
                          value={username}
                          onChange={(e) => setUsernameState(e.target.value)}
                        />
                        <label className="form-label">Username</label>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPasswordState(e.target.value)}
                        />
                        <label className="form-label">Password</label>
                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>
                      <p className="m-0">
                        Copyright &copy; Asgard Collection 2024
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
