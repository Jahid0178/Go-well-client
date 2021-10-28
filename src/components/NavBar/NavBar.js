import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About US
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
