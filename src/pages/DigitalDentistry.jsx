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
import axios from "axios";

const DigitalDentistry = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get("https://denticadentalstudio.com/api/product")
      .then((res) => {
        // console.log(res.data);
        if (res.data && res.data.data && Array.isArray(res.data.data.product)) {
          const filteredData = res.data.data.product.find(
            (item) => item.title === "Digital Dentristry"
          );
          if (filteredData) {
            setProductData(filteredData.product_images);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("product", productData);
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
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
        <div className="dent-page-content">
          <div
            id="project-block-two"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="dent-page-image"
          >
            <div className="inner-box" style={{ display: "flex" }}>
              {productData.map((image, imgIndex) => (
                <figure
                  key={imgIndex}
                  className="image-box"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{ transition: "all 1s ease-out 0s" }}
                >
                  <img
                    src={image}
                    style={{ height: "100%", width: "100%" }}
                    alt={`Image ${imgIndex}`}
                  />
                  {hovered && (
                    <div
                      className="dent-overlay"
                      onClick={() => openLightbox(0)}
                    >
                      <FaMagnifyingGlassPlus className="flaticon-zoom-icon" />
                    </div>
                  )}
              {lightboxOpen && (
                <Lightbox
                  mainSrc={productData[selectedImageIndex]?.image}
                  onCloseRequest={closeLightbox}
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
