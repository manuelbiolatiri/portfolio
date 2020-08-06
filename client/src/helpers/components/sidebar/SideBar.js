import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';


import SubMenu from "./SubMenu.js";

const SideBar = ({ isOpen, toggle }) => {




return (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="">
    </div>
    <div className="side-menu">
    <Tilt className=" m-auto Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 70, width: 70 }} >
						 	<div className="Tilt-inner"><img src="flashtokenlogo.jpg" alt=""/></div>
						</Tilt>
      <Nav vertical className="list-unstyled pb-3">
        <h5>Flash Token</h5>
        <SubMenu title="Home" icon={faHome} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/dashboard"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" icon={faCopy} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/buy"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Buy
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/affiliate"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            Affiliate
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Contact
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);
}
const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
