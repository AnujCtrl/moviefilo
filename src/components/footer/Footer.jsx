import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
import Img from "../lazyLoadImage/Img";
import logo from "../../assets/logo.png";

const Footer = () => {
  const redirect = () => {
    window.open(
      "https://github.com/AnujCtrl",
      "_blank"
    );
  };

  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <NavLink className="menuItem" to="/terms">
            Terms of Use
          </NavLink>
          <NavLink className="menuItem" to="/privacy">
            Privacy Policy
          </NavLink>
          <NavLink className="menuItem" to="/blog">
            Blog
          </NavLink>
          <span className="menuItem" onClick={() => redirect()}>
            FAQ
          </span>
          <NavLink className="menuItem" to="/about">
            About
          </NavLink>
        </ul>
        <div className="detail d-flex flex-wrap justify-content-between align-items-center my-4 border-top">
          <span className="copyright mb-0 text-muted">
            © {new Date().getFullYear()} moviefilo, Pvt. Ltd.
          </span>
          <Img className="image" src={logo} />
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
