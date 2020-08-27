import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
        <div className="container">
          <Navbar.Brand href="#home" className="logo">
            <FontAwesomeIcon icon={faGlobe} className="logo" />
            <span>Online Course Hub</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Categories
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <input
                type="text"
                size="sm"
                placeholder="Search..."
                className="ml-3 element-height"
              ></input>
              <FontAwesomeIcon
                icon={faSearch}
                className="m-3 icon"
                variant="info"
              />
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="m-3 icon"
                variant="info"
              />
              <Button
                variant="outline-info"
                className="mr-3 element-height btn"
              >
                Log in
              </Button>
              <Button variant="info" className="element-height btn-info">
                Sign up
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/** Cover thumneil */}
      <div className="cover ">
        <div className="col-4 text-div container">
          <h1>Learn any thing...</h1>
          <h1>Any time...</h1>
          <h1>Any where...</h1>
          <Button className="btn-info">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
