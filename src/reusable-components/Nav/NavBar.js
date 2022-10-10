import React from "react";
import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  // ---------------------------------------
  // ============== JS AREA ==============
  // ---------------------------------------
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  // ---------------------------------------
  // ============== HTML AREA ==============
  // ---------------------------------------
  return (
    <div className="navbar_container">
      <Navbar expand="lg" className="container">
        <Container>
          <NavLink to="/home">
            <img src={logo} alt="" className="img-fluid" />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                className="link"
                to="/home"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "#fff",
                  background: isActive ? "#1c2b35" : "#1c2b35",
                  borderBottom: isActive ? "2px solid orange" : "none",
                })}
              >
                Home
              </NavLink>
              <NavLink
                className="link"
                to="/shop"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "#fff",
                  background: isActive ? "#1c2b35" : "#1c2b35",
                  borderBottom: isActive ? "2px solid orange" : "none",
                })}
              >
                Shop
              </NavLink>
              <NavLink
                className="link"
                to="/order"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "#fff",
                  background: isActive ? "#1c2b35" : "#1c2b35",
                  borderBottom: isActive ? "2px solid orange" : "none",
                })}
              >
                Order
              </NavLink>
              <NavLink
                className="link"
                to="/inventory"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "#fff",
                  background: isActive ? "#1c2b35" : "#1c2b35",
                  borderBottom: isActive ? "2px solid orange" : "none",
                })}
              >
                Inventory
              </NavLink>
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-danger w-50 h-25 mt-1"
                >
                  Log Out
                </button>
              ) : (
                <NavLink
                  className="link"
                  to="/login"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "#fff",
                    background: isActive ? "#1c2b35" : "#1c2b35",
                    borderBottom: isActive ? "2px solid orange" : "none",
                  })}
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
