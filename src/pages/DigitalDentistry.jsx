import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dent_img from "../img/dent_page.png";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import ModalImage from "react-modal-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DigitalDentistry = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    console.log("lightboxOpen",lightboxOpen);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    console.log("lightboxOpen",lightboxOpen);
  };

  return (
    <div className="dent-page-main">
      <div
        className="dent-page-sub"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
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
        {/* <div className="dent-page-data-main">
          <div className="dent-page-data">
            <div className="dent-page-img">
              <ModalImage 
                small={dent_img} 
                large={dent_img} 
                onClick={handleModalToggle}
                />
                {modalOpen &&(
                  <button 
                    ClassName="close-button"
                    onclick={handleModalToggle}
                  >
                      Close
                  </button>
                )}
            </div>
            <div className="dent-page-img">
              <ModalImage small={dent_img} large={dent_img} />
            </div>
            <div className="dent-page-img">
              <ModalImage small={dent_img} large={dent_img} />
            </div>
          </div>
        </div> */}
        <div id="project-block-two">
          <div className="inner-box">
            <figure className="image-box"
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}>
                <img src={dent_img} 
                     style={{ height:"300px", width:"30%" }}
                     alt=""
                />
                {hovered && (
                <div className="zoom-icon-container" onClick={() => openLightbox(0)}>
                  <FaMagnifyingGlassPlus className="flaticon-zoom-icon" />
                </div>
              )}
            </figure>
          </div>
        </div>

        {lightboxOpen && (
          <Lightbox
            mainSrc={dent_img}
            onCloseRequest={closeLightbox}
          />
        )}  
      </div>
    </div>
  );
};

export default DigitalDentistry;
