import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dent_img from "../img/home_dentistery.jpg";
import ModalImage from "react-modal-image";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const DigitalDentistry = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [images, setImages] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://denticadentalstudio.com/webapp/api/product")
      .then((res) => {
        console.log(res.data);
        if (res.data.data.product) {
          const filteredData = res.data.data.product.filter(
            (item) => item.product_type === 1
          );
          console.log(filteredData);
          if (filteredData) {
            const images = filteredData.flatMap((item) =>
              item.product_images.map((src) => ({
                src,
                lightboxOpen: false,
                hovered: false, // Add a hovered state
              }))
            );
            setImages(images);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openLightbox = (index) => {
    setLightboxOpen(true);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
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

  return (
    <div className="dent-page-main">
      {/* {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )} */}
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
        <div
          className="dent-page-content"
          style={{
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${dent_img})`,
              backgroundSize: "cover",
              height: "100%vh",
              backgroundPosition: "center",
              opacity: 0.5, // Adjust the opacity here
              zIndex: -1,
            }}
          ></div>
          <div
            id="project-block-two"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="dent-page-image"
          >
            <div
              className="inner-box"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gap: "20px",
              }}
            >
              {images.map((image, imgIndex) => (
                <figure
                  key={imgIndex}
                  className="image-box"
                  onMouseEnter={() => handleMouseEnter(imgIndex)} // Track mouse enter event
                  onMouseLeave={() => handleMouseLeave(imgIndex)} // Track mouse leave event
                  onClick={() => openLightbox(imgIndex)}
                  style={{
                    cursor:"pointer",
                    transition: "all 0.3s ease",
                    margin: "1rem",
                    width: "250px",
                    boxShadow: image.hovered
                      ? "0 6px 10px rgba(0, 0, 0, 0.6)"
                      : "none", // Apply box shadow on hover
                  }}
                >
                  <img
                    src={image.src}
                    style={{ height: "100%", width: "100%" }}
                    alt={`Image ${imgIndex}`}
                  />
                  {lightboxOpen && (
                    <Lightbox
                      mainSrc={images[selectedImageIndex].src}
                      onCloseRequest={closeLightbox}
                      nextSrc={
                        images[(selectedImageIndex + 1) % images.length].src
                      }
                      prevSrc={
                        images[
                          (selectedImageIndex + images.length - 1) %
                            images.length
                        ].src
                      }
                      onMovePrevRequest={() =>
                        setSelectedImageIndex(
                          (selectedImageIndex + images.length - 1) %
                            images.length
                        )
                      }
                      onMoveNextRequest={() =>
                        setSelectedImageIndex(
                          (selectedImageIndex + 1) % images.length
                        )
                      }
                    />
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalDentistry;
