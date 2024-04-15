import React, { useState } from "react";
import logo from "../img/Logo.png";
import wp from "../img/whatsapp.png";
import insta from "../img/instagra.png";
import fb from "../img/facebook.png";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import $ from "jquery";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  $(document).on("click", ".button-nav, .navigation-backdrop", function () {
    var $nav = $("#navigation-demo");
    var $hasClass = $nav.hasClass("open");

    if (!$hasClass) {
      $nav.addClass("open");
      $("body").append("<div class='navigation-backdrop'></div>");
    } else {
      $nav.removeClass("open");
      $(".navigation-backdrop").remove();
    }
  });

  function closeForm() {
    $(".form-popup-bg").removeClass("is-visible");
  }

  $(document).ready(function ($) {
    /* Contact Form Interactions */
    $("#btnOpenForm").on("click", function (event) {
      event.preventDefault();

      $(".form-popup-bg").addClass("is-visible");
    });

    //close popup when clicking x or off popup
    $(".form-popup-bg").on("click", function (event) {
      if (
        $(event.target).is(".form-popup-bg") ||
        $(event.target).is("#btnCloseForm")
      ) {
        event.preventDefault();
        $(this).removeClass("is-visible");
      }
    });
  });

  return (
    <div className="nav-main">
      <div className="nav-sub">
        <div className="top-nav-main">
          <div className="top-nav-data">
            <div className="top-nav-loc">
              <span>
                <FaLocationDot />
              </span>
              <p>Patel Nagar, Varachha, Surat, Gujarat 395008</p>
            </div>
            <div className="top-nav-email">
              <span>
                <FaEnvelope />
              </span>
              <a href="mailto:info@dentco.net">denticadentalstudio@gmail.com</a>
            </div>
          </div>
          <div className="top-nav-btn">
            <div className="top-nav-btn-sub">
              <a className="button" href="#popup1">
                Verify Warranty
              </a>
            </div>
            <div id="popup1" class="verify-overlay">
              <div class="popup">
                <div className="verify-head">
                  <h2>Verify Warranty</h2>
                  <a class="close" href="/">
                    &times;
                  </a>
                </div>
                <div class="content">
                  <div className="verify-form-input">
                    <h1>Order Id</h1>
                    <input type="text" placeholder="Enter order Id" />
                  </div>
                  <div className="verify-form-input">
                    <h1>Authentication Id</h1>
                    <input type="text" placeholder="Enter Authentication Id" />
                  </div>
                  <div className="verify-form-submit">
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="top-nav-btn-sub">
              <Link to="/submit-stl-file">Submit STL File</Link>
            </div>
          </div>
        </div>
        <div className="nav-data">
          <div className="nav-logo-main">
            <div className="nav-logo-sub">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="nav-menu-main">
            <ul className="nav-menu-ul">
              <li className="nav-menu-li">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-menu-li dropdown">
                <Link to="/products" className="dropbtn">
                  Products
                  <IoIosArrowDown />
                </Link>
                <div className="dropdown-content">
                  <Link to="/products/implants">IMPLANTS </Link>
                  <Link to="/products/lithium-disilicate">
                    Lithium-Disilicate
                  </Link>
                  <Link to="/products/den-zir">Den-zir </Link>
                  <Link to="/products/dmls-pfm">DMLS PFM </Link>
                  <Link to="/products/removable">Removable </Link>
                </div>
              </li>
              <li className="nav-menu-li">
                <Link to="/digital-dentistry">Digital Dentistry</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/carrier">Career</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/review">Review</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
          <div className="nav-contact-main">
            <div className="nav-contact-icon">
              <div className="nav-contact-img nav-wp">
                <a href="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio">
                  <img src={wp} alt="" />
                </a>
              </div>
              <div className="nav-contact-img nav-insta">
                <a href="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D">
                  <img src={insta} alt="" />
                </a>
              </div>
              <div className="nav-contact-img nav-fb">
                <a href="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL">
                  <img src={fb} alt="" />
                </a>
              </div>
            </div>
            <div className="nav-contact-phone">
              <span>
                <FaPhone />
              </span>
              <a href="tel:+918530101701">+91 8530101701</a>
            </div>
          </div>
        </div>
        <div className="nav-data tab-nav">
          <div className="tab-nav-p1">
            <div className="nav-logo-main">
              <div className="nav-logo-sub">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="nav-contact-main">
              <div className="nav-contact-icon">
                <div className="nav-contact-img nav-wp">
                  <a href="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio">
                    <img src={wp} alt="" />
                  </a>
                </div>
                <div className="nav-contact-img nav-insta">
                  <a href="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D">
                    <img src={insta} alt="" />
                  </a>
                </div>
                <div className="nav-contact-img nav-fb">
                  <a href="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL">
                    <img src={fb} alt="" />
                  </a>
                </div>
              </div>
              <div className="nav-contact-phone">
                <span>
                  <FaPhone />
                </span>
                <a href="tel:+918530101701">+91 8530101701</a>
              </div>
            </div>
          </div>
          <div className="nav-menu-main">
            <ul className="nav-menu-ul">
              <li className="nav-menu-li">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-menu-li dropdown">
                <Link to="/products" className="dropbtn">
                  Products
                  <IoIosArrowDown />
                </Link>
                <div className="dropdown-content">
                  <Link to="/products/implants">IMPLANTS </Link>
                  <Link to="/products/lithium-disilicate">
                    Lithium-Disilicate
                  </Link>
                  <Link to="/products/den-zir">Den-zir </Link>
                  <Link to="/products/dmls-pfm">DMLS PFM </Link>
                  <Link to="/products/removable">Removable </Link>
                </div>
              </li>
              <li className="nav-menu-li">
                <Link to="/digital-dentistry">Digital Dentistry</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/carrier">Career</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/review">Review</Link>
              </li>
              <li className="nav-menu-li">
                <Link to="/events">Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile Screen */}

      <div class="main">
        <div class="header-top">
          <div className="mobile-header-img-box">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <button class="button-nav">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>
        </div>

        <div class="navigation" id="navigation-demo">
          <nav>
            <div className="mobile-nav-logo">
              <div class="navigation-heading popup-nav-logo">
                <img src={logo} alt="" />
              </div>
              <div class="navigation-button">
                <button class="button-nav">
                  <IoClose />
                </button>
              </div>
            </div>
            <div className="mobile-nav-content">
              <div className="mobile-nav-menu-main">
                <ul class="navigation-list">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/products">Products</a>
                  </li>
                  <li>
                    <a href="/digital-dentistry">Digital Dentistry</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/carrier">Career</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/review">Review</a>
                  </li>
                  <li>
                    <a href="/events">Events</a>
                  </li>
                </ul>
                <div className="mobile-view-nav-btn">
                  {/* <div className="mobile-view-nav-form-btn">
                  <Link to="">Verify Warranty</Link>
                </div> */}

                  <button id="btnOpenForm" className="mob-verify-pop">
                    Verify Warranty
                  </button>

                  <div class="form-popup-bg">
                    <div class="form-container">
                      <div className="form-container-head">
                        <h1>Contact Us</h1>
                        <button id="btnCloseForm" class="close-button">
                          X
                        </button>
                      </div>
                      <form action="" className="mobile-pop-form">
                        <div className="verify-form-input">
                          <h1>Order Id</h1>
                          <input type="text" placeholder="Enter order Id" />
                        </div>
                        <div className="verify-form-input">
                          <h1>Authentication Id</h1>
                          <input
                            type="text"
                            placeholder="Enter Authentication Id"
                          />
                        </div>
                        <div className="verify-form-submit">
                          <button>Submit</button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <a href="/submit-stl-file">Submit STL File</a>
                </div>
              </div>
              <div className="mobile-view-nav-data">
                <div className="mobile-view-nav-data-txt">
                  <h1>Contact Info</h1>
                  <div className="mobile-view-nav-data-txt-loc">
                    <p>
                      <b>Our Location :</b> <br />
                      Plot No. 3/3-3/4, Dhuna House, opp. Patel Nagar, Varachha,
                      Surat, Gujarat 395008
                    </p>
                  </div>
                  <div className="mobile-view-nav-data-txt-link">
                    <p>
                      <b>Contact :</b> <a href="">+91 85301 01701</a>
                    </p>
                    <p>
                      <b>Email :</b>
                      <a href="">denticadentalstudio@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="mobile-view-nav-data-icon">
                  <div>
                    <a href="">
                      <img src={wp} alt="" />
                    </a>
                  </div>
                  <div style={{ width: "40px" }}>
                    <a href="">
                      <img src={insta} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <img src={fb} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
