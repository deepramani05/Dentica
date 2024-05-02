import React from "react";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";
import dent_lg from "../img/dent-logo.png";

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
              <div
                style={{
                  width: "300px",
                  height: "100px",
                  overflow: "hidden",
                  margin: "0 auto",
                }}
              >
                <Link to='/'>
                  <img
                    src={dent_lg}
                    alt=""
                    width={"300px"}
                    height={"300px"}
                    style={{ position: "relative", top: "-100px" }}
                  />
                </Link>
              </div>
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
                      <CiFacebook />
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
                  <Link
                    to="https://api.whatsapp.com/send?phone=918530101701&text=Hello%2C%20Dentica%20Dental%20Studio"
                    target="_blank"
                  >
                    <i class="fab fa-codepen">
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
