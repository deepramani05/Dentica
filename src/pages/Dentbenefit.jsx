import React from "react";
import { Link } from "react-router-dom";
import benefit_img from "../img/dent_page.png";
import { FaArrowRight } from "react-icons/fa";

const Dentbenefit = () => {
  return (
    <div className="benefit-main">
      <div className="benefit-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Blog</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="benefit-data-main">
          <div className="benefits-data-p1">
            <div className="benefit-p1-img">
              <img src={benefit_img} alt="" />
            </div>
            <div className="benefit-p1-content">
              <div className="benefit-p1-content-cat">
                <h1>Categories</h1>
                <Link>
                  <span>
                    <FaArrowRight />
                  </span>
                  Latest Blog
                </Link>
              </div>
              <div className="benefit-p1-content-btn-main">
                <h1>Tags :</h1>
                <div className="benefit-p1-content-btn">
                  <div>
                    <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                      Top 5 benefits of digital dentistry
                    </Link>
                    <br />
                  </div>
                  <div>
                    <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                      Digital Dentristry
                    </Link>
                  </div>
                  <div>
                    <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                      Digital Dentristry
                    </Link>
                    <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                      PFM
                    </Link>
                    <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                      Den-zir
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits-data-p2">
            <div className="benefits-data-p2-head">
              <h1>Top 5 benefits of digital dentistry</h1>
            </div>
            <div className="benefits-data-p2-txt">
              <p>
                Desires to obtain pain of itself because it is pain but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure to take a trivial example which
                of us ever undertakeslaborious physical exercise, except to
                obtain some advantage from it but who has any right to find
                fault with a man who chooses to enjoy a pleasures.
              </p>
              <p>
                Desires to obtain pain of itself because it is pain but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure to take a trivial example which
                of us ever undertakeslaborious physical exercise, except to
                obtain some advantage from it but who has any right to find
                fault with a man who chooses to enjoy a pleasures.
              </p>
              <p>
                Desires to obtain pain of itself because it is pain but because
                occasionally circumstances occur in which toil and pain can
                procure him some great pleasure to take a trivial example which
                of us ever undertakeslaborious physical exercise, except to
                obtain some advantage from it but who has any right to find
                fault with a man who chooses to enjoy a pleasures.
              </p>
            </div>
          </div>
          <div className="benefits-data-p3">
            <h1>Latest Blog</h1>
            <div className="benefits-data-p3-inner-box">
                <img src={benefit_img} alt="" />
                <div>
                    <a href="">Top 5 benefits of digital dentistry</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentbenefit;
