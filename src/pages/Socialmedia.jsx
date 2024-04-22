import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";

const Socialmedia = () => {
  return (
    <div>
      <div className="sociallinks-main">
        <div className="sociallinks-sub">
          <div className="sociallinks-head-txt">
            <h3>
              Dentica Dental Studio is a dental lab based in Surat, Gujarat,
              India. Follow us on social media for updates, <br /> promotions,
              and dental care tips!
            </h3>
          </div>
          <div className="sociallinks-link">
            <div className="sociallinks-link-head">
              <h1>DDS Social Media Channels</h1>
            </div>
            <hr />
            <div className="sociallinks-link-main">
              <div className="sociallinks-link-box">
                <Link
                  to="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
                  target="_blank"
                  style={{ color: "rgb(59, 89, 152)" }}
                >
                  <span>
                    <BsFacebook />
                  </span>
                  Facebook
                </Link>
              </div>
              {/* <div className="sociallinks-link-box special">
                <Link target="_blank" style={{ color: "rgb(0, 119, 181)" }}>
                  <span>
                    <BiLogoLinkedinSquare />
                  </span>
                  Linked In
                </Link>
              </div> */}
              <div className="sociallinks-link-box special">
                <Link target="_blank" style={{ color: "rgb(195, 42, 163)" }}>
              <div className="sociallinks-link-box">
                <Link
                  to="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
                  target="_blank"
                  style={{ color: "rgb(195, 42, 163)" }}
                >
                  <span>
                    <BsInstagram />
                  </span>
                  Instagram
                </Link>
              </div>
              <div className="sociallinks-link-box">
                <Link
                  to="tel:+918530101701"
                  target="_blank"
                  style={{ color: "rgb(0, 123, 255)" }}
                >
                  <span>
                    <FiPhone />
                  </span>
                  Phone
                </Link>
              </div>
              <div className="sociallinks-link-box special">
                <Link target="_blank" style={{ color: "rgb(37, 211, 102)" }}>
              <div className="sociallinks-link-box">
                <Link
                  to="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio"
                  target="_blank"
                  style={{ color: "rgb(37, 211, 102)" }}
                >
                  <span>
                    <ImWhatsapp />
                  </span>
                  Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;