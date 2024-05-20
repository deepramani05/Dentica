import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { SlMagnifierAdd } from "react-icons/sl";
import axios from "axios";

const Dentalshow = () => {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/api/event`, { id })
      .then((res) => {
        console.log(res.data.data.event);
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

  const openLightbox = (index) => {
    setLightboxOpen(index);
  };

  const closeLightbox = () => {
    setLightboxOpen(null);
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
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
                    height: "fit-content",
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
                    onClick={() => openLightbox(index)}
                  >
                    <figure
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <img
                        src={ele.image}
                        alt={ele.category_id}
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
                    margin: "10px",
                  }}
                >
                  <div
                    className="dental-show-img dent-page-img"
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                    onClick={() => openLightbox(index)}
                  >
                    <figure
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <img
                        src={ele.image}
                        alt={ele.category_id}
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
              ))}
          </div>

          {lightboxOpen !== null && (
            <Lightbox
              mainSrc={eventData[lightboxOpen].image}
              nextSrc={eventData[(lightboxOpen + 1) % eventData.length].image}
              prevSrc={
                eventData[
                  (lightboxOpen + eventData.length - 1) % eventData.length
                ].image
              }
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() =>
                setLightboxOpen(
                  (prev) => (prev + eventData.length - 1) % eventData.length
                )
              }
              onMoveNextRequest={() =>
                setLightboxOpen((prev) => (prev + 1) % eventData.length)
              }
              // imageTitle={eventData[lightboxOpen].category_id} // Add image title
              // imageCaption={eventData[lightboxOpen].description} // Add image caption
              imagePadding={100} // Adjust image padding as per your requirement
              enableZoom={true} // Enable zoom
              reactModalStyle={{
                // Style for lightbox modal
                overlay: {
                  zIndex: 9999,
                },
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dentalshow;
