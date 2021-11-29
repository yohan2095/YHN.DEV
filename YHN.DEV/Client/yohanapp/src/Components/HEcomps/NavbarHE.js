import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap';
import React, { useState } from 'react';
import HomeHEComp from './HomeHE';
import PortfolioHEComp from './PortfolioHE';
import AboutmeHEComp from './AboutmeHE';

function NavBarHEComp() {

  const [page, setPage] = useState("./HomeHE");

    return (
      <div className="App">

<ReactBootStrap.Navbar className="color-nav" expand="lg" bg="dark" sticky="top">
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand onClick={() => setPage("./Home")} style={{ color : 'aquamarine' }}>YHN.DEV</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link onClick={() => setPage("./HomeHE")}>Home</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link  onClick={() => setPage("./PortfolioHE")}>פורטפוליו</ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link  onClick={() => setPage("./AboutmeHE")}>אודות</ReactBootStrap.Nav.Link>
                <ReactBootStrap.NavDropdown title="קישורים" id="basic-nav-dropdown">
                  <ReactBootStrap.NavDropdown.Item href="https://www.fiverr.com/yhn_dev">Fiverr</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://www.linkedin.com/in/yohan-arejouane-62752b104/">LinkedIn</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://github.com/yohan2095">Github</ReactBootStrap.NavDropdown.Item>
                  <ReactBootStrap.NavDropdown.Item href="https://www.instagram.com/yhn.dev/">Instagram</ReactBootStrap.NavDropdown.Item>
                </ReactBootStrap.NavDropdown>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
        
        <div>
        {page === "./HomeHE" && <HomeHEComp />}
        {page === "./PortfolioHE" && <PortfolioHEComp />}
        {page === "./AboutmeHE" && <AboutmeHEComp />}
        </div>
      </div>
    );
  }
  
  export default NavBarHEComp;