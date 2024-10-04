import React, { useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/styles.css";

const Header = ({ isAuthenticated = true }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const publicNav = (
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/product">Products</Nav.Link>
    </Nav>
  );

  const privateNav = (
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/accountManagement">Fund Transfer</Nav.Link>
      <Nav.Link as={Link} to="/support">Support</Nav.Link>
      <Nav.Link as={Link} to="/notify">Notification</Nav.Link>
    </Nav>
  );

  return (
    <header>
      <Navbar
        style={{ backgroundColor: darkMode ? "#043f71" : "#f8f9fa" }}
        variant={darkMode ? "dark" : "light"}
        expand="lg"
      >
        <Navbar.Brand as={Link} to="/" style={{ color: darkMode ? "#e8eff4" : "#000" }}>
          Bank UI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? privateNav : publicNav}
          <Nav>
            {isAuthenticated ? (
              <>
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
            <Button
              variant={darkMode ? "secondary" : "primary"}
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

export default Header;
