import React, { useState } from "react";
import { Link } from "react-router-dom";
import dmls_img from "../img/product_content-5.jpg";
import dmls1 from '../img/dmls1.jpg'
import dmls2 from '../img/dmls2.jpg'
import dmls3 from '../img/dmls3.jpg'
import dmls4 from '../img/dmls4.jpg'
import ModalImage from "react-modal-image";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Lightbox from "react-image-lightbox";

const DmlsPfm = () => {

  const [images, setImages]= useState([
    {src: dmls1, lightboxOpen: false, hovered: false},
    {src: dmls2, lightboxOpen: false, hovered: false},
    {src: dmls3, lightboxOpen: false, hovered: false},
    {src: dmls4, lightboxOpen: false, hovered: false},
  ]);

  const openLightbox = (index) =>{
    const updatedImages = [...images]
    updatedImages[index].lightboxOpen = true;
    setImages(updatedImages)
  };
  const closeLightbox = (index) =>{
    const updatedImages = [...images]
    updatedImages[index].lightboxOpen = false;
    setImages(updatedImages)
  };

  const handleMouseEnter = (index) =>{
    const updatedImages = [...images];
    updatedImages[index].hovered = true;
    setImages(updatedImages);
  };

  const  handleMouseLeave = (index) =>{
    const updatedImages = [...images];
    updatedImages[index].hovered = false;
    setImages(updatedImages);
  }

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="dlms-main">
      <div className="dlms-sub">
        <div className="pages-banner dmls-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/" onClick={handleNavClick}>Home</Link>
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
                <div className="implant-p1-link">
                  <Link to="/products/den-zir" onClick={handleNavClick}>Den-zir</Link>
                </div>
                <hr />
                <div className="implant-p1-link dp">
                  <Link to="/products/dmls-pfm" onClick={handleNavClick}>DMLS PFM</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="implant-cntent-p2">
            <div className="implant-p2-head">
              <h1>Related Product Images</h1>
            </div>
            <div>
              <div className="implant-p2-img-row">
              {images.map((image, index) => (
                <div className="implant-p2-img">
                  <div className="implant-p2-img-box">
                    <div className="image-container">
                      <figure
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <img
                          src={image.src}
                          style={{ height: "100%", width: "100%" }}
                          alt={`implant-${index}`}
                        />
                        {image.hovered && (
                          <div className="dent-overlay" onClick={() => openLightbox(index)}>
                            <FaMagnifyingGlassPlus className="flaticon-zoom-icon" />
                          </div>
                        )}
                      </figure>
                      {image.lightboxOpen && (
                        <Lightbox mainSrc={image.src} onCloseRequest={() => closeLightbox(index)} />
                      )}
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DmlsPfm;
