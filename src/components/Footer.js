import React, { Component } from "react";
import githubLogo from "../assets/logos/ethereumLogo.png";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-style">
          <Nav>
            <NavItem>
              <NavLink href="https://github.com/mrcallenmatias" target="_blank">
                Terms
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mrcallenmatias" target="_blank">
                Privacy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mrcallenmatias" target="_blank">
                Security
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mrcallenmatias" target="_blank">
                Docs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mrcallenmatias" target="_blank">
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/mrcallenmatias" target="_blank">
                About
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="copyright">
            <img src={githubLogo} className="footer-logo" /> &copy; 2022
            CryptoTracker by Marc
          </Nav>
        </div>
      </footer>
    );
  }
}
