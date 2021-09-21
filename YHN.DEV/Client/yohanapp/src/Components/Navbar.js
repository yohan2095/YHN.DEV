import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import React, { useState } from 'react';
import HomeComp from './Home';
import PortfolioComp from './Portfolio';


function NavBarComp() {

  const [page, setPage] = useState("./Home");

    return (
      <div className="App">

        <ReactBootStrap.Navbar bg="light" expand="lg" sticky="top">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand onClick={() => setPage("./Home")}>YHN.DEV</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link onClick={() => setPage("./Home")}>Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link  onClick={() => setPage("./Portfolio")}>Portfolio</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="More about me" id="basic-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="https://www.linkedin.com/in/yohan-arejouane-62752b104/">LinkedIn</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://github.com/yohan2095">Github</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://www.instagram.com/yhn.dev/">Instagram</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4">CV</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        
        <div>
        {page === "./Home" && <HomeComp />}
        {page === "./Portfolio" && <PortfolioComp />}
        </div>
      </div>
    );
  }
  
  export default NavBarComp;