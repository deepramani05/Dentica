import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import Lightbox from "react-image-lightbox";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const SubProducts = () => {
  const [images, setImages] = useState([]);
  const [productData, setProductData] = useState(null);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const { id } = useParams();
  // console.log("id...........", id);
  useEffect(() => {
    if (id) {
      axios
        .post(`https://denticadentalstudio.com/api/show/product`, { id })
        .then((res) => {
          const data = res.data.data.product;
          setProductData(data);
          const imageObjects = data.product_images.map((image) => ({
            src: image,
            lightboxOpen: false,
            hovered: false,
          }));
          setImages(imageObjects);
            const img = new Image();
            img.src = data.background_image;
            img.onload = () => {
              setBgImageLoaded(true);
            };
        })
        .catch((err) => {
          console.error("Error fetching product data:", err);
        });
    }
  }, [id]);

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

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="implant-main">
        <div className="implant-sub" data-aos="fade-up" data-aos-duration="2000">
          <div className="pages-banner implant-banner"
                style={{
                  backgroundImage: bgImageLoaded
                    ? `url(${productData.background_image})`
                    : `url(/path/to/low-res-placeholder.jpg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
          >
            <div className="pages-banner-sub">
              <div className="pages-content-box implant-banner-box">
                <ul className="pages-ul">
                  <li>
                    <Link to="/" onClick={handleNavClick}>
                      Home
                    </Link>
                  </li>
                  <li>{productData.title}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="implant-content-main">
            <div className="implant-content-p1">
              <div className="implant-p1-img">
                <h1>{productData.title}</h1>
                <div className="implant-p1-img-box">
                  <img src={productData.image} alt={productData.title} />
                </div>
                <div
                  className="implant-p1-img-txt"
                  dangerouslySetInnerHTML={{ __html: productData.description }}
                ></div>
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
                  <div className="implant-p1-link">
                    <Link to="/product/removable" onClick={handleNavClick}>
                      Removable
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link im">
                    <Link to="/product/implants" onClick={handleNavClick}>
                      Implants
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link">
                    <Link to="/product/den-zir" onClick={handleNavClick}>
                      Den-zir
                    </Link>
                  </div>
                  <hr />
                  <div className="implant-p1-link">
                    <Link to="/product/dmls-pfm" onClick={handleNavClick}>
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
                  <div className="implant-p2-img" key={index}>
                    <div className="implant-p2-img-box">
                      <div className="image-container">
                        <figure onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                          <img src={image.src} style={{ height: "100%", width: "100%" }} alt={`implant-${index}`} />
                          {image.hovered && (
                            <div className="dent-overlay" onClick={() => openLightbox(index)}>
                              <FaMagnifyingGlassPlus className="flaticon-zoom-icon" />
                            </div>
                          )}
                        </figure>
                        {image.lightboxOpen && <Lightbox mainSrc={image.src} onCloseRequest={() => closeLightbox(index)} />}
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
