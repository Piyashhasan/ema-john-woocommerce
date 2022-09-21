import React from "react";
import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
                })}
              >
                Inventory
              </NavLink>
              <NavLink
                className="link"
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "orange" : "#fff",
                  background: isActive ? "#1c2b35" : "#1c2b35",
                })}
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
