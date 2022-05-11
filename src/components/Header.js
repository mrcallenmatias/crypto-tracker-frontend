import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <NavLink to="/">
            <img
              src="https://cdnuploads.aa.com.tr/uploads/Contents/2021/12/04/thumbs_b_c_bc8f3a5be8101335943f85ef236e61a2.jpg?v=131220"
              alt="logo for crypto header"
              className="crypto-logo"
            />
          </NavLink>
        </div>
        <div className="title-header">Crypto Tinder</div>
        <div className="navigation">
          <Navbar expand="sm" fixed="Top" light>
            <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="/cryptoindex">Find Crypto</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/cryptonew">Add Crypto</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </header>
    );
  }
}
