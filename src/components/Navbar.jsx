import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logoM from "../logoM.png";
import dummyImg from "../dummy.png";
import { Snackbar, Alert, Button } from "@mui/material";

const Navbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("token");
    // Show snackbar
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const token = localStorage.getItem("token") || null;
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  //   const currentUser = localStorage.getItem("currentUser") || null;

  console.log("token", token);

  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Logged out successfully!
        </Alert>
      </Snackbar>
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          {" "}
          <img style={{ width: "175px", height: "60px" }} src={logoM} />
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          {token && token?.length > 0 ? (
            <div
              style={{ display: "flex", alignItems: "baseline" }}
              className="buttons text-center"
            >
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <p style={{ marginRight: "7px" }}>Welcome:</p>
                <div className="fa fa-user mr-1"></div>
                <p style={{ fontWeight: 700, marginRight: "15px" }}>
                  {currentUser}
                </p>
              </div>
              <NavLink
                style={{
                  background: "#0dcaf0",
                  color: "#FFFFFF",
                  border: "none",
                }}
                to="/cart"
                className="btn btn-outline-dark m-2"
              >
                <i className="fa fa-cart-shopping mr-1"></i> Cart (
                {state.length}){" "}
              </NavLink>

              <NavLink
                onClick={handleLogout}
                style={{
                  background: "#dc3545",
                  color: "#FFFFFF",
                  border: "none",
                  marginLeft: "15px !important",
                }}
                className="btn btn-outline-dark m-2"
              >
                <i className="fa fa-sign-out mr-1"></i>Logout
              </NavLink>
            </div>
          ) : (
            <div className="buttons text-center">
              <NavLink
                style={{
                  background: "#007bff",
                  color: "#FFFFFF",
                  border: "none",
                }}
                to="/login"
                className="btn btn-outline-dark m-2"
              >
                <i className="fa fa-sign-in-alt mr-1"></i> Login
              </NavLink>
              <NavLink
                style={{
                  background: "#28a745",
                  color: "#FFFFFF",
                  border: "none",
                }}
                to="/register"
                className="btn btn-outline-dark m-2"
              >
                <i className="fa fa-user-plus mr-1"></i> Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
