import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
import ModalImage from "react-modal-image";
import AOS from "aos";
import "aos/dist/aos.css";

const Dentalshow = () => {
  useEffect(() => {
    AOS.init();
  }, []);

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
        <div className="dental-show-content">
          <div
            className="dental-show-content-box dent-show-box-1"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show1} large={show1} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show2} large={show2} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show3} large={show3} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show4} large={show4} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show5} large={show5} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show6} large={show6} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show7} large={show7} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show8} large={show8} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show9} large={show9} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show10} large={show10} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show11} large={show11} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box dent-show-box-12"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show12} large={show12} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show13} large={show13} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box dent-show-box-14"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show14} large={show14} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
          <div
            className="dental-show-content-box"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="dental-show-img dent-page-img">
              <ModalImage small={show15} large={show15} />
              {/* <div className="dent-page-img-overlay dent-img-overlay">
                <Link>
                  <FaMagnifyingGlassPlus />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dentalshow;
