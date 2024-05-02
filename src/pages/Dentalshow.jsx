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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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
            <div
              className="dental-show-content-box dental-show-content-box-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show1} alt="Show 1" onClick={() => openLightbox(0)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 0)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show2} alt="Show 2" onClick={() => openLightbox(1)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 1)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show3} alt="Show 3" onClick={() => openLightbox(2)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 2)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show4} alt="Show 4" onClick={() => openLightbox(3)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 3)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show5} alt="Show 5" onClick={() => openLightbox(4)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 4)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show6} alt="Show 6" onClick={() => openLightbox(5)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 5)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show7} alt="Show 7" onClick={() => openLightbox(6)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 6)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show8} alt="Show 8" onClick={() => openLightbox(7)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 7)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img src={show9} alt="Show 9" onClick={() => openLightbox(8)} />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 8)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img
                  src={show10}
                  alt="Show 10"
                  onClick={() => openLightbox(9)}
                />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 9)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img
                  src={show11}
                  alt="Show 11"
                  onClick={() => openLightbox(10)}
                />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 10)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box dental-show-content-box-12"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img
                  src={show12}
                  alt="Show 12"
                  onClick={() => openLightbox(11)}
                />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 11)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img
                  src={show13}
                  alt="Show 13"
                  onClick={() => openLightbox(12)}
                />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 12)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box dental-show-content-box-14"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img
                  src={show14}
                  alt="Show 14"
                  onClick={() => openLightbox(13)}
                />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 13)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dental-show-content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="dental-show-img dent-page-img">
                <img
                  src={show15}
                  alt="Show 15"
                  onClick={() => openLightbox(14)}
                />
                <div className="dent-show-overlay">
                  <div
                    className="zoom-icon"
                    onClick={(event) => handleIconClick(event, 14)}
                  >
                    <i className="fa" aria-hidden="true">
                      <SlMagnifierAdd />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {lightboxOpen && (
            <Lightbox
              mainSrc={showImages[selectedImageIndex]}
              nextSrc={showImages[(selectedImageIndex + 1) % showImages.length]}
              prevSrc={
                showImages[
                  (selectedImageIndex + showImages.length - 1) %
                    showImages.length
                ]
              }
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() =>
                setSelectedImageIndex(
                  (selectedImageIndex + showImages.length - 1) %
                    showImages.length
                )
              }
              onMoveNextRequest={() =>
                setSelectedImageIndex(
                  (selectedImageIndex + 1) % showImages.length
                )
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
