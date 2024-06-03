import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { SlMagnifierAdd } from "react-icons/sl";
import axios from "axios";

const Dentalshow = () => {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [lightboxOpen0, setLightboxOpen0] = useState(null);
  const [lightboxOpen1, setLightboxOpen1] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/webapp/api/event`, {
        params: { id },
      })
      .then((res) => {
        // console.log(res.data.data.event);
        // Filter the data where category_id is 1
        let filteredData = res.data.data.event.filter(
          (item) => item.category_id === id
        );
        setEventData(filteredData);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to fetch data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const openLightbox = (index, dimension) => {
    if (dimension === 0) {
      setLightboxOpen0(index);
    } else if (dimension === 1) {
      setLightboxOpen1(index);
    }
  };

  const closeLightbox = (dimension) => {
    if (dimension === 0) {
      setLightboxOpen0(null);
    } else if (dimension === 1) {
      setLightboxOpen1(null);
    }
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  const renderLightbox = (lightboxOpen, dimension) => {
    const images = eventData.filter((item) => item.dimension === dimension);
    if (lightboxOpen !== null) {
      return (
        <Lightbox
          mainSrc={images[lightboxOpen].image}
          nextSrc={images[(lightboxOpen + 1) % images.length].images}
          prevSrc={
            images[(lightboxOpen + images.length - 1) % images.length].images
          }
          onCloseRequest={() => closeLightbox(dimension)}
          onMovePrevRequest={() =>
            dimension === 0
              ? setLightboxOpen0(
                  (lightboxOpen + images.length - 1) % images.length
                )
              : setLightboxOpen1(
                  (lightboxOpen + images.length - 1) % images.length
                )
          }
          onMoveNextRequest={() =>
            dimension === 0
              ? setLightboxOpen0((lightboxOpen + 1) % images.length)
              : setLightboxOpen1((lightboxOpen + 1) % images.length)
          }
          imagePadding={100}
          enableZoom={true}
          reactModalStyle={{
            overlay: {
              zIndex: 9999,
            },
          }}
        />
      );
    }
    return null;
  };
  return (
    <div className="dental-show-main">
      {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )}
      {error && <div>Error: {error}</div>}
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
        <div
          className="dental-show-content-main"
          style={{ margin: "30px 20px" }}
        >
          <div className="dental-show-content">
            {eventData
              .filter((item) => item.dimension === 0)
              .map((ele, index) => (
                <div
                  className="dental-show-content-box dental-show-content-box-1"
                  key={ele.id}
                  style={{
                    height: "auto",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="dental-show-img dent-page-img"
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                    onClick={() => openLightbox(index, 0)}
                  >
                    <figure
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <img
                        src={ele.image}
                        alt={ele.category_id}
                        style={{
                          width: "100%",
                          height: "100%",
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
              ))}
            {eventData
              .filter((item) => item.dimension === 1)
              .map((ele, index) => (
                <div
                  className="dental-show-content-box dental-show-content-box-1"
                  key={ele.id}
                  style={{
                    height: "100%",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="dental-show-img dent-page-img"
                    style={{
                      height: "100%",
                      width: "100%",
                      overflow: "hidden",
                      position: "relative",
                    }}
                    onClick={() => openLightbox(index, 1)}
                  >
                    <figure
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <img
                        src={ele.image}
                        alt={ele.category_id}
                        style={{
                          width: "100%",
                          height: "100%",
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
              ))}
          </div>
          {renderLightbox(lightboxOpen0, 0)}
          {renderLightbox(lightboxOpen1, 1)}
        </div>
      </div>
    </div>
  );
};

export default Dentalshow;
