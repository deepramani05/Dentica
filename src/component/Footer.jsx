import React from "react";
import "../css/style.css";
import logo from "../img/Logo.png";
import wp from "../img/whatsapp.png";
import fb from "../img/facebook.png";
import insta from "../img/instagra.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-sub">
        <div className="main-footer-menu">
          <div className="main-footer-p1">
            <div className="main-footer-p1-content">
              <h1>Products</h1>
              <hr className="footer-hr" />
              <Link to='/products/implants'>
                <p>Implants</p>
              </Link>
              <Link to='/products/lithium-disilicate'>
                <p>Lithium-Disilicate</p>
              </Link>
              <Link to='/products/den-zir'>
                <p>Den-zir</p>
              </Link>
              <Link to='/products/dmls-pfm'>
                <p>DMLS PFM</p>
              </Link>
              <Link to='/products/removable'>
                <p>Removable</p>
              </Link>
            </div>
            <div className="main-footer-p1-content">
              <h1>Useful Links</h1>
              <hr className="footer-hr" />
              <Link to='/about'>
                <p>About</p>
              </Link>
              <Link to='/carrier'>
                <p>Career</p>
              </Link>
              <Link to='/review'>
                <p>Review</p>
              </Link>
              <Link to='/blog'>
                <p>Blog</p>
              </Link>
              <Link to='/contact'>
                <p>Contact</p>
              </Link>
              <Link to='/gallary'>
                <p>Gallery</p>
              </Link>
              <Link to='/digital-dentistry'>
                <p>Digital-dentistry</p>
              </Link>
            </div>
            <div className="main-footer-p1-content">
              <h1>Lab Opening Hrs</h1>
              <hr className="footer-hr" />
              <h3>
                Mon-Saturday: <br />
                <span>9.00 am to 9.00 pm</span>
              </h3>
              <h3 style={{ margin: "20px 0" }}>
                Sunday: <br />
                <span>Closed</span>
              </h3>
            </div>
          </div>
          <div className="main-footer-p2">
            <h1>Get in touch</h1>
            <hr className="footer-hr" />
            <div className="footer-add">
              <h3>Our Location :</h3>
              <p>
                Plot No. 3/3-3/4, Dhuna House, <br /> opp. Patel Nagar,
                Varachha, <br />
                Surat, Gujarat 395008
              </p>
            </div>
            <div className="footer-num">
              <a href="mailto:info@dentco.net">
                <p>Email : denticadentalstudio@gmail.com</p>
              </a>
              <a href="tel:+918530101701">
                <p className="footer-cont-icon">
                  <span><FaPhoneAlt /></span>
                  +91 8530101701
                </p>
              </a>
              <a href="tel:+918487838383">
                <p className="footer-cont-icon">
                  <span><FaPhoneAlt /></span>
                  +91 8487838383
                </p>
              </a>
            </div>
            <div className="footer-icon">
              <a href="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL">
                <p className="footer-icon-fb">
                  <img src={fb} alt="" />
                </p>
              </a>
              <a href="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D">
                <p className="footer-icon-insta">
                  <img src={insta} alt="" />
                </p>
              </a>
              <a href="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio">
                <p className="footer-icon-wp">
                  <img src={wp} alt="" />
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-low">
          <div className="low-footer-img">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="low-footer-txt">
            <p>
              © 2024
              <span>
                <a href="/">Dentica Dental Studio</a>
              </span>
              Dentica Dental Studio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
