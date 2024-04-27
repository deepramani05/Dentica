import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import denzir_img from "../img/product_content-4.jpg";
import denzir1 from "../img/denzir1.png";
import ModalImage from "react-modal-image";

import AOS from "aos";
import "aos/dist/aos.css";

const DenZir = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="denzir-main">
      <div className="denzir-sub" data-aos="fade-up" data-aos-duration="2000">
        <div className="pages-banner denzir-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/" onClick={handleNavClick}>Home</Link>
                </li>
                <li>Den-Zir</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="implant-content-main">
          <div className="implant-content-p1">
            <div className="implant-p1-img">
              <h1>Den-Zir</h1>
              <div className="implant-p1-img-box">
                <img src={denzir_img} alt="" />
              </div>
              <div className="implant-p1-img-txt">
                <h3>Den-Zir Crowns</h3>
                <p>
                  Options for Den-Zir crowns include Den-Zir Solid, Den-Zir HT
                  (High Translucent), and Den-Zir Layered. Den-Zir Solid is
                  monolithic and is the strongest material available. It's
                  particularly good for patients with clenching or grinding
                  problems and is most suitable for posterior crowns and
                  bridges. Den-Zir Layered is another extremely strong material
                  suitable for bridges and crowns. It's substructure is Den-Zir
                  with porcelain layered over it and is similar to PFM.
                </p>
                <p>
                  Den-Zir HT is made from a stronger material than that of PFM
                  restorations but still has a natural translucency and
                  excellent esthetics. It's perfect for anterior crowns and for
                  bridges up to 3 units.Den-Zir Layered is another extremely
                  strong material suitable for bridges and crowns. Its
                  substructure is Den-Zir with porcelain layered over it, and it
                  is similar in construction to PFM (Porcelain-Fused-to-Metal)
                  restorations.
                </p>
                <p>
                  The porcelain's propensity for chipping and cracking,
                  especially where it meets the hard metal sublayer, is a
                  serious negative. This jeopardizes the restoration's
                  durability and appearance. Furthermore, the alloy
                  substructure's opacity makes it difficult for the crown to
                  resemble the natural translucency of a real tooth. Due to
                  these restrictions, creative solutions such lithium disilicate
                  crowns, which provide a superior balance of strength and
                  aesthetics for contemporary dental restorations, have been
                  investigated.
                </p>
                <h3>Why Choose Den-Zir Restorations?</h3>
                <p>
                  Den-Zir restorations offer clinicians several advantages, and
                  the introduction of newer and more esthetically pleasing
                  Den-Zir materials has greatly increased their appeal. More
                  clinicians are choosing to scan tooth preparations rather than
                  taking conventional tray impressions. Dental laboratories
                  utilize the scans to create precision-made restorations
                  relatively easily.
                </p>
              </div>
            </div>
            <div className="implant-p1-link-main">
              <h1>Our products</h1>
              <div className="implant-p1-link-sub">
                <div className="implant-p1-link">
                  <Link to="/products/lithium-disilicate" onClick={handleNavClick}>
                    Lithium-Disilicate
                  </Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/removable" onClick={handleNavClick}>Removable</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/implants" onClick={handleNavClick}>Implants</Link>
                </div>
                <hr />
                <div className="implant-p1-link dz">
                  <Link to="/products/den-zir" onClick={handleNavClick}>Den-zir</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/products/dmls-pfm" onClick={handleNavClick}>DMLS PFM</Link>
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
                  <ModalImage small={denzir1} large={denzir1} />
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

export default DenZir;
