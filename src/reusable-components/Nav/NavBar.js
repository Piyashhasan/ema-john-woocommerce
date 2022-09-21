import React from "react";
import "./NavBar.css";
import logo from "../../images/Logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const NavBar = () => {
  return (
    <div className="navbar_container">
      <Navbar expand="lg" className="container">
        <Container>
          <img src={logo} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>Shop</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/order">
                <Nav.Link>Order</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/inventory">
                <Nav.Link>Inventory</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
