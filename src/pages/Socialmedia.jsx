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
              <h2>Dentica Dental Studio</h2>
              <br />
              <h1>Social Media Channels</h1>
            </div>
            <hr />
            <div class="social-menu">
              <ul>
                <li>
                  <Link
                    to="https://www.facebook.com/denticadental.dental?mibextid=ZbWKwL"
                    target="blank"
                  >
                    <i class="fab">
                      <BsFacebook />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/dentica_dental_studio/?igshid=NzZhOTFlYzFmZQ%3D%3D"
                    target="blank"
                  >
                    <i class="fab">
                      <BsInstagram />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link to="tel:+918530101701" target="blank">
                    <i class="fab">
                      <FiPhone />
                    </i>
                  </Link>
                </li>
                <li>
                  <Link to="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio">
                    <i class="fab fa-codepen" target="blank">
                      <ImWhatsapp />
                    </i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
