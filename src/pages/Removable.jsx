import React from "react";
import { Link } from "react-router-dom";
import removable_img from "../img/product_content-2.png";
import removable1 from "../img/home_product-5.jpg";
import ModalImage from "react-modal-image";

const Removable = () => {
  return (
    <div className="removable-main">
      <div className="removable-sub">
        <div className="pages-banner removable-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Removable</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="implant-content-main">
          <div className="implant-content-p1">
            <div className="implant-p1-img">
              <h1>Removable</h1>
              <div className="implant-p1-img-box removable-p1-img-box">
                <img src={removable_img} alt="" />
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
                <div className="implant-p1-link re">
                  <Link to="/products/removable">Removable</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
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
                  <ModalImage small={removable1} large={removable1} />
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

export default Removable;
