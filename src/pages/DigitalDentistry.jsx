import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dent_img from "../img/home_dentistery.jpg";
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
  // const [hovered, setHovered] = useState(false);
  // const [productData, setProductData] = useState([]);
  const [images, setImages] = useState([]);

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
            const images = filteredData.product_images.map((src)=>({
              src,
              lightboxOpen:false,
              hovered:false,
            }))
            setImages(images);
            // setProductData(filteredData);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const openLightbox = (index) => {
    const updatedImages = [...images];
    updatedImages[index].lightboxOpen = true;
    setImages(updatedImages)
  };
  const closeLightbox = (index) => {
    const updatedImages =[...images];
    updatedImages[selectedImageIndex].lightboxOpen = false;
    setImages(updatedImages);
  };
  const handleMouseEnter = (index) =>{
    const updatedImages = [...images];
    updatedImages[index].hovered = true;
    setImages(updatedImages);
  }

  const handleMouseLeave =(index) =>{
    const updatedImages = [...images];
    updatedImages[index].hovered = false;
    setImages(updatedImages);
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
              {images.map((image, imgIndex) => (
                <figure
                  key={imgIndex}
                  className="image-box"
                  onMouseEnter={() => handleMouseEnter(imgIndex)}
                  onMouseLeave={() => handleMouseLeave(imgIndex)}
                  style={{ transition: "all 1s ease-out 0s", margin:'1rem'}}
                >
                  <img
                    src={image.src}
                    style={{ height: "100%", width: "100%" }}
                    alt={`Image ${imgIndex}`}
                    onClick={() => openLightbox(imgIndex)}
                  />
                  {image.hovered && (
                    <div
                      className="dent-overlay"
                      onClick={() => openLightbox(imgIndex)}
                    >
                      <FaMagnifyingGlassPlus className="flaticon-zoom-icon" />
                    </div>
                  )}
                {image.lightboxOpen && (
                <Lightbox
                  mainSrc={images[selectedImageIndex].src}
                  onCloseRequest={closeLightbox}
                  nextSrc={
                    images[(selectedImageIndex + 1) % images.length].src
                  }
                  prevSrc={
                    images[(selectedImageIndex  + images.length - 1) % images.length].src
                  }
                  onMovePrevRequest={() =>
                    setSelectedImageIndex(
                      (selectedImageIndex  + images.length - 1) % images.length
                    )
                  }
                  onMoveNextRequest={() =>
                    setSelectedImageIndex((selectedImageIndex + 1) % images.length)
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
