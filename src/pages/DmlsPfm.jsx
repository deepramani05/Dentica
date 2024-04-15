import React from "react";
import { Link } from "react-router-dom";
import dmls_img from "../img/product_content-5.jpg";
import dmls1 from '../img/dmls1.jpg'
import dmls2 from '../img/dmls2.jpg'
import dmls3 from '../img/dmls3.jpg'
import dmls4 from '../img/dmls4.jpg'
import ModalImage from "react-modal-image";

const DmlsPfm = () => {
  return (
    <div className="dlms-main">
      <div className="dlms-sub">
        <div className="pages-banner dmls-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>DMLS PFM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="implant-content-main">
          <div className="implant-content-p1">
            <div className="implant-p1-img">
              <h1>DMLS PFM</h1>
              <div className="implant-p1-img-box">
                <img src={dmls_img} alt="" />
              </div>
              <div className="implant-p1-img-txt">
                <p>
                  Introducing Direct Metal Laser Sintering (DMLS), a
                  cutting-edge dental manufacturing technique. By using Computer
                  Aided Design (CAD) data to painstakingly sinter alloy powder
                  layer by layer, this cutting-edge method revolutionizes the
                  production of dental crowns and bridges. DMLS achieves
                  unmatched results with a remarkable tensile strength of 1350
                  MPa and an amazing bonding capability by using a specific,
                  very biocompatible alloy. The use of direct metal laser
                  sintering, which ushers in a new age in the casting of metal
                  crowns, is an example of how dental technology is advancing
                  and importing advances from several sectors.
                </p>
                <h3>Advantages of DLMS for dental bridges and crowns</h3>
                <p>
                  <b>1.</b> Exceptional Material Density: DLMS crowns and
                  bridges have a phenomenal density of 99.9% thanks to their
                  3–14 m particle size and 0.1 mm fine point laser. This results
                  in extremely strong copings and almost void-free
                  constructions.
                </p>
                <p>
                  <b>2.</b> Accuracy and Detail: The DLMS technique results in
                  extremely precise and minutely detailed restorations, ensuring
                  exceptional accuracy in marginal fitting, constant quality,
                  and general strength.
                </p>
                <p>
                  <b>3.</b> Clean and Effective: DLMS offers a more efficient
                  substitute for conventional casting techniques, lowering the
                  possibility of inclusions or faults that are frequently
                  connected to hand casting.
                </p>
                <p>
                  <b>4.</b> Standardization: With the use of this technology,
                  coping thickness, pontic design, and cement thickness may all
                  be standardized, ensuring uniformity in dental restorations.
                </p>
                <p>
                  <b>5.</b> Predictable Marginal Fit: When compared to
                  traditional methods, DLMS's computer-controlled, exact
                  approach minimizes distortion, makes it more predictable, and
                  enhances the marginal fit of multiple unit frameworks.
                </p>
                <p>
                  In conclusion, DLMS technology benefits dental crown and
                  bridge production by improving material density, precision,
                  cleanliness, consistency, and predictability.
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
                <div className="implant-p1-link">
                  <Link to="/products/implants">Implants</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/den-zir">Den-zir</Link>
                </div>
                <hr />
                <div className="implant-p1-link dp">
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
                  <ModalImage small={dmls1} large={dmls1} />
                </div>
                {/* <div className="implant-p2-overlay"></div> */}
              </div>
              <div className="implant-p2-img-box">
                <div className="image-container">
                  <ModalImage small={dmls2} large={dmls2} />
                </div>
                {/* <div className="implant-p2-overlay"></div> */}
              </div>
              <div className="implant-p2-img-box">
                <div className="image-container">
                  <ModalImage small={dmls3} large={dmls3} />
                </div>
                {/* <div className="implant-p2-overlay"></div> */}
              </div>
              <div className="implant-p2-img-box">
                <div className="image-container">
                  <ModalImage small={dmls4} large={dmls4} />
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

export default DmlsPfm;
