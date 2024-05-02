import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { SlMagnifierAdd } from "react-icons/sl";

import show1 from "../img/dent_show-1.jpg";
import show2 from "../img/dent_show-2.jpg";
import show3 from "../img/dent_show-3.jpg";
import show4 from "../img/dent_show-4.jpg";
import show5 from "../img/dent_show-5.jpg";
import show6 from "../img/dent_show-6.jpg";
import show7 from "../img/dent_show-7.jpg";
import show8 from "../img/dent_show-8.jpg";
import show9 from "../img/dent_show-9.jpg";
import show10 from "../img/dent_show-10.jpg";
import show11 from "../img/dent_show-11.jpg";
import show12 from "../img/dent_show-12.jpg";
import show13 from "../img/dent_show-13.jpg";
import show14 from "../img/dent_show-14.jpg";
import show15 from "../img/dent_show-15.jpg";
import { FaMagnifyingGlass, FaMagnifyingGlassPlus } from "react-icons/fa6";

const Dentalshow = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const showImages = [
    show1,
    show2,
    show3,
    show4,
    show5,
    show6,
    show7,
    show8,
    show9,
    show10,
    show11,
    show12,
    show13,
    show14,
    show15,
  ];
  const [lightboxOpen, setLightboxOpen] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxOpen(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(null);
  };

  const handleMouseEnter = (index) =>{
    setHovered(index)
  };
  const handleMouseLeave = () => {
    setHovered(null);
  };
  const handleIconClick = (event, index) => {
    event.stopPropagation();
    openLightbox(index);
  };

  return (
    <div className="dental-show-main">
      <div className="dental-show-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Gujarat Dental Show 2024</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Gujarat Dental Show 2024</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dental-show-content-main">
          <div className="dental-show-content">
            { showImages.map((image, index) =>(
              <div
              className="dental-show-content-box dental-show-content-box-1"
              data-aos="fade-up"
              key={index}
              data-aos-duration="2000"
              style={{ height: "300px" }}
            >
              <div className="dental-show-img dent-page-img"
                style={{ height: "300px", position: "relative" }}
                onClick={() => openLightbox(index)}
              >
                <div>
                  <figure 
                    onMouseEnter = {()=> handleMouseEnter(index)}
                    onMouseLeave=  {()=>  handleMouseLeave()}
                  >
                    <img 
                      src={image} 
                      alt={`show ${index+1}`} 
                      onClick={() => openLightbox(index)}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                    
                      {hovered === index && (
                        <div className="dent-show-overlay">
                          <div className="zoom-icon">
                            <SlMagnifierAdd className="flaticon-zoom-icon" />
                          </div>
                        </div>
                        )}
                  </figure>
                </div>
              </div>
            </div>
            ))}
          </div>
          {lightboxOpen !== null && (
            <Lightbox 
              mainSrc={showImages[lightboxOpen]}
              nextSrc={showImages[(lightboxOpen  + 1) % showImages.length]}
              prevSrc={
                showImages[(lightboxOpen + showImages.length-1) % showImages.length]
              }
              onCloseRequest={closeLightbox}
              onMovePrevRequest={()=>
                setLightboxOpen((prev) => (prev + showImages.length - 1) % showImages.length)
              }
              onMoveNextRequest={()=>
                setLightboxOpen((prev) => (prev + 1) % showImages.length)
              }
              imageTitle={`Image ${selectedImageIndex + 1}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dentalshow;
