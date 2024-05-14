import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import lithium_img from "../img/product_content-1.jpg";
import lithium1 from "../img/lithium_img1.png";
import lithium2 from "../img/lithium_img2.png";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Lightbox from "react-image-lightbox";

import AOS from "aos";
import "aos/dist/aos.css";

const LithiumDisilicate = () => {

  const [images, setImages]= useState([
    {src:lithium1, lightboxOpen:false, hovered:false},
    {src:lithium2, lightboxOpen:false, hovered:false},
  ])

  const openLightbox = (index) => {
    const upadatedImages = [...images];
    upadatedImages[index].lightboxOpen = true;
    setImages(upadatedImages)
  };
  const closeLightbox = (index) => {
    const updatedImages = [...images];
    updatedImages[index].lightboxOpen = false;
    setImages(updatedImages);
  };
  
  const handleMouseEnter = (index) => {
    const updatedImages = [...images];
    updatedImages[index].hovered = true;
    setImages(updatedImages);
  };
  
  const handleMouseLeave = (index) => {
    const updatedImages = [...images];
    updatedImages[index].hovered = false;
    setImages(updatedImages);
  };
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
    <div className="lithium-main">
      <div className="lithium-sub" data-aos="fade-up" data-aos-duration="2000">
        <div className="pages-banner lithium-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Lithium Disilicate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="implant-content-main">
          <div className="implant-content-p1">
            <div className="implant-p1-img">
              <h1>Lithium - Disilicate</h1>
              <div className="implant-p1-img-box">
                <img src={lithium_img} alt="" />
              </div>
              <div className="implant-p1-img-txt">
                <p>
                  There are many options available in the world of dental crown
                  materials, all of which are created to meet different dental
                  requirements. Consider complete porcelain crowns, which are
                  renowned for producing beautiful cosmetic effects. Or consider
                  gold units as a whole, which are renowned for their
                  unsurpassed durability and toothlike properties. However, if
                  you're looking for a cutting-edge solution that expertly
                  combines alluring beauty with unyielding toughness, have a
                  look at this uncommon choice.
                </p>
                <p>
                  Throughout the years, PFM crowns have lingered as the gold
                  standard for mending compromised dentition. Installing a
                  custom blend of ceramic and metal, this type of restoration
                  has aimed to deliver a combination of strength and aesthetic
                  appeal. Nonetheless, the boundaries of this traditional
                  solution have fomented an endeavor to identify an alternate.
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
                <h3>
                  Elevate Your Smile with Lithium Disilicate Veneers and Full
                  Crowns
                </h3>
                <p>
                  When it comes to crafting a smile makeover, the art of
                  indirect ceramic veneers shines brilliantly. Yet, the secret
                  to achieving not just success but excellence in this realm
                  lies in embracing a minimally invasive approach and
                  meticulously crafting your treatment protocol.
                </p>
              </div>
            </div>
            <div className="implant-p1-link-main">
              <h1>Our products</h1>
              <div className="implant-p1-link-sub">
                <div className="implant-p1-link ld">
                  <Link to="/product/lithium-disilicate" onClick={handleNavClick}>
                    Lithium-Disilicate
                  </Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/product/removable" onClick={handleNavClick}>Removable</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/product/implants" onClick={handleNavClick}>Implants</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/product/den-zir" onClick={handleNavClick}>Den-zir</Link>
                </div>
                <hr />
                <div className="implant-p1-link">
                  <Link to="/product/dmls-pfm" onClick={handleNavClick}>DMLS PFM</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="implant-content-p2">
            <div className="implant-p2-head">
              <h1>Related Product Images</h1>
            </div>
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
  );
};

export default LithiumDisilicate;
