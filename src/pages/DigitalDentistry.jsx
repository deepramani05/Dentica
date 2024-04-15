import React, { useState } from "react";
import { Link } from "react-router-dom";
import dent_img from "../img/dent_page.png";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import ModalImage from "react-modal-image";

const DigitalDentistry = () => {
  return (
    <div className="dent-page-main">
      <div className="dent-page-sub">
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
