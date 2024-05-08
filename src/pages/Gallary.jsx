import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-image-lightbox/style.css";
import gallary1 from "../img/home_gallary-1.jpg";
import gallary2 from "../img/home-gallary-2.jpg";
import Lightbox from "react-image-lightbox";
import { SlMagnifierAdd } from "react-icons/sl";

const Gallary = () => {
  const categories = ["All", "BeforeAfter", "Product"];
  const initialImages  = {
    All: [{src:gallary1, lightboxOpen:false}, {src:gallary2, lightboxOpen:false}],
    BeforeAfter: [{src:gallary2, lightboxOpen:false}],
    Product: [{src:gallary1, lightboxOpen:false}],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [images, setImages] = useState(initialImages[selectedCategory]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  
  const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
    setImages(initialImages[category]);
  }

  const openLightbox = (index) =>{
    const updatedImages = images.map((image,i)=>({
      ...image,
      lightboxOpen: i === index,
    }));
    setImages(updatedImages);
    setPhotoIndex(index);
    setLightboxOpen(true);
  }

  const closeLightbox =() =>{
    const updatedImages = images.map((image)=>({
      ...image,
      lightboxOpen: false,
    }));
    setImages(updatedImages);
    setLightboxOpen(false);
  };

  const handleMouseEnter =(index)=>{
    setHovered(index);
  };

  const handleMouseLeave = () =>{
    setHovered(null);
  };

  const handleIconClick = (event,index) =>{
    event.stopPropagation();
    openLightbox(index);
  }
  

  return (
    <div className="gallary-main">
      <div className="gallary-sub">
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
            <ul className="gallary-content-menu">
              <div className="gallary-content-menu-btn">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ul>
            <ul className="gallary-content-img">
              <div className="gallary-content-img-main">
                {images.map((image, index) => (
                   <div
                   key={index}
                   onClick={() => openLightbox(index)}
                   onMouseEnter={() => handleMouseEnter(index)}
                   onMouseLeave={() => handleMouseLeave()}
                   style={{ position: "relative" }}
                 >
                   <img src={image.src} alt={selectedCategory} />
                   {hovered === index && (
                     <div className="zoom-icon" onClick={(event) => handleIconClick(event, index)}>
                       <SlMagnifierAdd />
                     </div>
                   )}
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
