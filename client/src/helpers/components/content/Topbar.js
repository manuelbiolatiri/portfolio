import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { createHashHistory } from "history";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

     const history = createHashHistory();

  const handleClick = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    history.go("/");
  }

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-white rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to={"/home"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/buy"}>
              Buy Bitcoin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/affiliate"}>
              Affiliate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/signout"} onClick={handleClick}>
              Sign Out
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
