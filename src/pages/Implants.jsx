import React from "react";
import { Link } from "react-router-dom";
import implant_img from "../img/product_content-3.jpg";
import implant1 from "../img/implant_img.png";
import implant2 from "../img/home_product-1.jpg";
import ModalImage from "react-modal-image";

const Implants = () => {
  return (
    <div className="implant-main">
      <div className="implant-sub">
        <div className="pages-banner implant-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Implants</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="implant-content-main">
          <div className="implant-content-p1">
            <div className="implant-p1-img">
              <h1>Implants</h1>
              <div className="implant-p1-img-box">
                <img src={implant_img} alt="" />
              </div>
              <div className="implant-p1-img-txt">
                <p>
                  In terms of their ability to improve the health, function, and
                  appearance of your smile, dental implants are the best
                  replacement option for missing teeth. They prevent
                  deterioration of the jawbone, keep the remaining teeth from
                  shifting out of place, hold restorations securely in place,
                  and offer a natural-looking appearance. In addition, dental
                  implants can be used to replace a single missing tooth,
                  several missing teeth, or all of the teeth in your mouth.
                </p>
              </div>
            </div>
            <div className="implant-p1-link-main">
              <h1>Our products</h1>
              <div className="implant-p1-link-sub">
                <div className="implant-p1-link">
                  <Link to="/products/lithium-disilicate">
                    Lithium-Disilicate
                  </Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/removable">Removable</Link>
                </div>
                <hr />
                <div className="implant-p1-link im">
                  <Link to="/products/implants">Implants</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/den-zir">Den-zir</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/dmls-pfm">DMLS PFM</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="implant-cntent-p2">
            <div className="implant-p2-head">
              <h1>Related Product Images</h1>
            </div>
            <div className="implant-p2-img">
              <div className="implant-p2-img-box">
                <div className="image-container">
                  <ModalImage small={implant1} large={implant1} />
                </div>
                {/* <div className="implant-p2-overlay"></div> */}
              </div>
              <div className="implant-p2-img-box">
                <div className="image-container">
                  <ModalImage small={implant2} large={implant2} />
                </div>
                {/* <div className="implant-p2-overlay"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Implants;
