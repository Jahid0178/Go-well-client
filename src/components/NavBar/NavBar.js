import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "../../images/logo.png";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();
  let userName = "";
  if (user.email) {
    userName = user.displayName;
  } else {
    userName = "";
  }
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="offcanvasNavbar">
            <Nav className="ms-auto align-items-center">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about">
                About US
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              {user.email ? (
                <NavLink className="nav-link" to="/addNewService">
                  Add New Service
                </NavLink>
              ) : (
                ""
              )}
              {user.email ? (
                <NavLink className="nav-link" to="/manageService">
                  Manage Service
                </NavLink>
              ) : (
                ""
              )}
              <Navbar.Text>
                <p className="ms-2 mb-0 me-2">{userName}</p>
              </Navbar.Text>
              <div>
                {user.email ? (
                  <img
                    className="p-2"
                    style={{ width: 60, borderRadius: "50%" }}
                    src={user.photoURL}
                    alt=""
                  />
                ) : (
                  ""
                )}
              </div>
              {!user.email ? (
                <Link to="/login">
                  <Button>Log In</Button>
                </Link>
              ) : (
                <Button onClick={logOut}>Log Out</Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
