import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dent_img from "../img/dent_page.png";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import ModalImage from "react-modal-image";

import AOS from "aos";
import "aos/dist/aos.css";

const DigitalDentistry = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="dent-page-main">
      <div
        className="dent-page-sub"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Digital Dentistry</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Digital Dentistry</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dent-page-data-main">
          <div className="dent-page-data">
            <div className="dent-page-img">
              <ModalImage small={dent_img} large={dent_img} />
            </div>
            <div className="dent-page-img">
              <ModalImage small={dent_img} large={dent_img} />
            </div>
            <div className="dent-page-img">
              <ModalImage small={dent_img} large={dent_img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDentistry;
