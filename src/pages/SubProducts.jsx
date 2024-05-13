import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import implant_img from "../img/product_content-3.jpg";
import implant1 from "../img/implant_img.png";
import implant2 from "../img/home_product-1.jpg";
import ModalImage from "react-modal-image";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Lightbox from "react-image-lightbox";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const SubProducts = () => {
  const [images, setImages] = useState([
    { src: implant2, lightboxOpen: false, hovered: false },
    { src: implant1, lightboxOpen: false, hovered: false },
  ]);

  const [productData, setProductData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      axios
        .get(`https://denticadentalstudio.com/api/product/${slug}`)
        .then((res) => {
          console.log(res.data);
          setProductData(res.data.data.product);
        })
        .catch((err) => {
          console.error("Error fetching product data:", err);
        });
    }
  }, [slug]);

  const openLightbox = (index) => {
    const updatedImages = [...images];
    updatedImages[index].lightboxOpen = true;
    setImages(updatedImages);
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
    <div>
      <div className="implant-main">
        <div
          className="implant-sub"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="pages-banner implant-banner">
            <div className="pages-banner-sub">
              <div className="pages-content-box implant-banner-box">
                <ul className="pages-ul">
                  <li>
                    <Link to="/" onClick={handleNavClick}>
                      Home
                    </Link>
                  </li>
                  <li>Implants</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="implant-content-main">
            <div className="implant-content-p1">
              <div className="implant-p1-img">
                <h1>Implants</h1>
                <div className="implant-p1-img-box">
                  <img src={implant_img} alt="" />
                </div>
                <div className="implant-p1-img-txt">
                  <p>
                    In terms of their ability to improve the health, function,
                    and appearance of your smile, dental implants are the best
                    replacement option for missing teeth. They prevent
                    deterioration of the jawbone, keep the remaining teeth from
                    shifting out of place, hold restorations securely in place,
                    and offer a natural-looking appearance. In addition, dental
                    implants can be used to replace a single missing tooth,
                    several missing teeth, or all of the teeth in your mouth.
                  </p>
                </div>
              </div>
              <div className="implant-p1-link-main">
                <h1>Our products</h1>
                <div className="implant-p1-link-sub">
                  <div className="implant-p1-link">
                    <Link
                      to="/products/lithium-disilicate"
                      onClick={handleNavClick}
                    >
                      Lithium-Disilicate
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link">
                    <Link to="/products/removable" onClick={handleNavClick}>
                      Removable
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link im">
                    <Link to="/products/implants" onClick={handleNavClick}>
                      Implants
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link">
                    <Link to="/products/den-zir" onClick={handleNavClick}>
                      Den-zir
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link">
                    <Link to="/products/dmls-pfm" onClick={handleNavClick}>
                      DMLS PFM
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="implant-cntent-p2">
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
                            <div
                              className="dent-overlay"
                              onClick={() => openLightbox(index)}
                            >
                              <FaMagnifyingGlassPlus className="flaticon-zoom-icon" />
                            </div>
                          )}
                        </figure>
                        {image.lightboxOpen && (
                          <Lightbox
                            mainSrc={image.src}
                            onCloseRequest={() => closeLightbox(index)}
                          />
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
    </div>
  );
};

export default SubProducts;
