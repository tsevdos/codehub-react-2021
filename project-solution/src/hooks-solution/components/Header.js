import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Row>
      <Col xs={12}>
        <Navbar dark className="bg-dark m-bottom" expand="md">
          <NavbarBrand tag={Link} to="/">
            Code.Hub Dashboard
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/courses">
                  Courses
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/add-course">
                  Add new course
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
