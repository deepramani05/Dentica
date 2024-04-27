import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import box1 from "../img/thumb_box-1.png";
import box2 from "../img/thumb_box-2.png";
import box3 from "../img/thumb_box-3.png";
import about_center from "../img/home_about-center.png";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-page-main">
      <div
        className="about-page-sub"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>About Us</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="about-page-content">
          <div className="about-p1 about-page-p1-main">
            <div className="about-p1-txt">
              <div className="sec-title">
                <span className="sub-title">ABOUT LAB</span>
                <h1>Discover the finest in dental lab products</h1>
              </div>
              <div className="sec-text">
                <p>
                  We at Dentica Dental Studio are your partners in creating
                  amazing smiles and improving lives, not just another dental
                  lab. Our constant objective is to continually provide dental
                  restoration procedures that are above and beyond your
                  expectations.
                </p>
                <p>
                  We don't simply make crowns, bridges, dentures, or implants;
                  with a team of dedicated specialists at the helm and
                  cutting-edge technology at our disposal, we also carve
                  masterpieces of accuracy and excellence. Each restoration is
                  painstakingly constructed with the best materials available,
                  reflecting our unrelenting quest of excellence.
                </p>
                <p>
                  Our collaborative attitude is what really distinguishes
                  Dentica Dental Studio. Together with dental professionals, our
                  experts provide specialized treatments that are tailored to
                  each patient's particular dental requirements. Our goal is to
                  achieve perfection, radiance, and enduring quality from the
                  beginning of the digital design process until the moment we
                  deliver.
                </p>
                <p>
                  At Dentica Dental Studio, we are proud of our artistic ability
                  as well as our craftsmanship. We give you the tools you need
                  to give your patients more than simply attractive,
                  self-assured smiles—we give them useful works of art that make
                  an impression.
                </p>
                <p>
                  Select Dentica Dental Studio to start a journey where dental
                  skill and creative innovation converge to produce genuinely
                  unique smiles.
                </p>
              </div>
            </div>
            <div className="about-p1-img">
              <div className="image-box">
                <div className="shape">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                </div>
                <div className="box">
                  <figure className="box-1 thumb">
                    <img src={box1} alt="" />
                  </figure>
                  <figure className="box-2 thumb">
                    <img src={box2} alt="" />
                  </figure>
                  <figure className="box-3 thumb">
                    <img src={box3} alt="" />
                  </figure>
                </div>
                <figure className="image">
                  <img src={about_center} alt="" />
                </figure>
                <div className="text">
                  <h2>
                    12 <span>+</span>
                  </h2>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
