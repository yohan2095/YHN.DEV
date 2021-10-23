import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import React, { useState } from 'react';
import HomeHEComp from './HomeHE';
import PortfolioHEComp from './PortfolioHE';

function NavBarHEComp() {

  const [page, setPage] = useState("./HomeHE");

    return (
      <div className="App">

        <ReactBootStrap.Navbar className="color-nav" variant="dark" expand="lg" sticky="top">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand onClick={() => setPage("./HomeHE")}>YHN.DEV</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link onClick={() => setPage("./HomeHE")}>עמוד הבית</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link  onClick={() => setPage("./PortfolioHE")}>פורטפוליו</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="אודות" id="basic-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="https://www.linkedin.com/in/yohan-arejouane-62752b104/">לינקדאין</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://github.com/yohan2095">גיטהב</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://www.instagram.com/yhn.dev/">אינסטגרם</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Divider />
                  <ReactBootStrap.NavDropdown.Item href="#action/3.4">CV</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        
        <div>
        {page === "./HomeHE" && <HomeHEComp />}
        {page === "./PortfolioHE" && <PortfolioHEComp />}
        </div>
      </div>
    );
  }
  
  export default NavBarHEComp;