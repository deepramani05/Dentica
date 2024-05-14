import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import removable_img from "../img/product_content-2.png";
import removable1 from "../img/home_product-5.jpg";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Lightbox from "react-image-lightbox";

import AOS from "aos";
import "aos/dist/aos.css";

const Removable = () => {
  const [images, setImages] = useState([
    {src : removable1, lightboxOpen: false, hovered: false},
  ])

  const openLightbox = (index) =>{
    const updatedImages = [...images];
    updatedImages[index].lightboxOpen = true;
    setImages(updatedImages);
  }

  const closeLightbox = (index) =>{
    const updatedImages =[...images];
    updatedImages[index].lightboxOpen = false;
    setImages(updatedImages);
  }

  const handleMouseEnter = (index) =>{
    const updatedImages = [...images];
    updatedImages[index].hovered = true;
    setImages(updatedImages);
  }

  const handleMouseLeave = (index) =>{
    const updatedImages = [...images];
    updatedImages[index].hovered = false;
    setImages(updatedImages)
  }
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
    <div className="removable-main">
      <div
        className="removable-sub"
        data-aos="fade-up"
        data-aos-duration="2000"
        >
        <div className="pages-banner removable-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box implant-banner-box">
              <ul className="pages-ul">
                <li>
                  <Link to="/" onClick={handleNavClick}>Home</Link>
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
                  <Link to="/product/lithium-disilicate" onClick={handleNavClick}>
                    Lithium-Disilicate
                  </Link>
                </div>
                <hr />
                <div className="implant-p1-link re">
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
                  <Link to="/products/dmls-pfm" onClick={handleNavClick}>DMLS PFM</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="implant-cntent-p2">
            <div className="implant-p2-head">
              <h1>Related Product Images</h1>
            </div>
            <div className="implant-p2-img-p2">
              {images.map((image, index)=>(
                <div className="implant-p2-img">
                  <div className="implant-p2-img-box">
                    <div className="image-container">
                      <figure 
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                      >
                        <img 
                          src={image.src}
                          style={{ height: '100%', width: '100%' }}
                          alt={`implant ${index}`}
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

export default Removable;
