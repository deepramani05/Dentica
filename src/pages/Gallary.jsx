import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-image-lightbox/style.css";
import Lightbox from "react-image-lightbox";
import axios from "axios";
import "../css/style.css";

const Gallary = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [images, setImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/webapp/api/gallery`)
      .then((res) => {
        // console.log(res.data.data.gallery);
        setGalleryData(res.data.data.gallery);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (galleryData.length > 0) {
      const categories = [...new Set(galleryData.map((item) => item.category))];
      setCategories(["All", ...categories]);
      setSelectedCategory("All");
      setImages(
        galleryData.map((item) => ({ src: item.image, lightboxOpen: false }))
      );
    }
  }, [galleryData]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setImages(
        galleryData.map((item) => ({ src: item.image, lightboxOpen: false }))
      );
    } else {
      setImages(
        galleryData
          .filter((item) => item.category === category)
          .map((item) => ({ src: item.image, lightboxOpen: false }))
      );
    }
  };

  const openLightbox = (index) => {
    const updatedImages = images.map((image, i) => ({
      ...image,
      lightboxOpen: i === index,
    }));
    setImages(updatedImages);
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    const updatedImages = images.map((image) => ({
      ...image,
      lightboxOpen: false,
    }));
    setImages(updatedImages);
    setLightboxOpen(false);
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleIconClick = (event, index) => {
    event.stopPropagation();
    openLightbox(index);
  };

  return (
    <div className="gallery-main">
      {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )}
      <div className="gallery-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Gallery</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gallary-page-content">
          <div className="gallary-page-content-sub">
            <ul className="gallery-content-menu">
              <div className="gallery-content-menu-btn">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={selectedCategory === category ? "active" : ""}
                    style={{ cursor: "pointer" }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ul>
            <ul className="gallery-content-img">
              <div className="gallery-content-img-main">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave()}
                    style={{ position: "relative", cursor: "pointer" }}
                  >
                    <img src={image.src} alt={selectedCategory} />
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <Lightbox
          mainSrc={images[photoIndex].src}
          nextSrc={images[(photoIndex + 1) % images.length].src}
          prevSrc={images[(photoIndex - 1 + images.length) % images.length].src}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
};

export default Gallary;
