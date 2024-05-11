import React, { useEffect, useState } from "react";
import "../css/style.css";
import box1 from "../img/thumb_box-1.png";
import box2 from "../img/thumb_box-2.png";
import box3 from "../img/thumb_box-3.png";
import about_center from "../img/home_about-center.png";
import dent from "../img/home_dentistery.jpg";
import prod_slider1 from "../img/home_product-1.jpg";
import prod_slider2 from "../img/home_product-2.png";
import prod_slider3 from "../img/home_product-3.jpg";
import prod_slider4 from "../img/home_product-4.png";
import prod_slider5 from "../img/home_product-5.jpg";
import gal_slider1 from "../img/home_gallary-1.jpg";
import gal_slider2 from "../img/home-gallary-2.jpg";
import review_img from "../img/dent_page.png";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaTextWidth } from "react-icons/fa";
// import { FaArrowUp } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Home = () => {
  const [productData, setProductData] = useState();
  const [galleryData, setGalleryData] = useState();
  const [reviewData, setReviewData] = useState();


  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    axios.get("https://denticadentalstudio.com/api/product")
      .then((res) => {
        // console.log(res.data);
        setProductData(res.data.data.product);
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get("https://denticadentalstudio.com/api/gallery")
      .then((res) => {
        // console.log(res.data);
        setGalleryData(res.data.data.gallery);
      })
      .catch((err) => {
        console.log(err);
      });
      // axios.get("https://denticadentalstudio.com/api/review")
      // .then((res) => {
      //   console.log(res.data);
      //   setReviewData(res.data.data.review);
      // })
      // .catch((err) => {
      //   console.log(err);
      // });

  }, []);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log("productData", productData);
  return (
    <div className="home-main">
      <section
        className="banner-section"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{ overflow: "hidden" }}
      >
        <div className="banner-main">
          <div className="overlay"></div>
          <div className="banner-data">
            <div
              className="banner-text-head"
              data-aos="fade-down"
              data-aos-duration="3000"
            >
              <h3>Smile Bright With</h3>
              <h1>Dentica Dental Studio</h1>
            </div>
            <hr data-aos="fade-right" data-aos-duration="1000" />
            <div
              className="banner-text-body"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p>
                Enhance your smile with Dentica Dental Studio, where quality
                meets compassionate care. Our <br /> experienced team offers
                tailored dental services to boost your oral health and
                confidence. Discover <br /> exceptional treatment in a welcoming
                and comforting environment..
              </p>
              <div className="banner-btn">
                <Link to="/about" onClick={handleNavClick}>
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about section started */}
      <section className="about-section">
        <div className="about-sub">
          <div className="about-p1">
            <div className="about-p1-txt">
              <div
                className="sec-title"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <span className="sub-title">ABOUT LAB</span>
                <h1>Discover the finest in dental lab products</h1>
              </div>
              <div className="sec-text">
                <p data-aos="fade-left" data-aos-duration="2000">
                  We at Dentica Dental Studio are your partners in creating
                  amazing smiles and improving lives, not just another dental
                  lab. Our constant objective is to continually provide dental
                  restoration procedures that are above and beyond your
                  expectations.
                </p>
                <p data-aos="fade-left" data-aos-duration="2000">
                  We don't simply make crowns, bridges, dentures, or implants;
                  with a team of dedicated specialists at the helm and
                  cutting-edge technology at our disposal, we also carve
                  masterpieces of accuracy and excellence. Each restoration is
                  painstakingly constructed with the best materials available,
                  reflecting our unrelenting quest of excellence.
                </p>
                <p data-aos="fade-left" data-aos-duration="2000">
                  Our collaborative attitude is what really distinguishes
                  Dentica Dental Studio. Together with dental professionals, our
                  experts provide specialized treatments that are tailored to
                  each patient's particular dental requirements. Our goal is to
                  achieve perfection, radiance, and enduring quality from the
                  beginning of the digital design process until the moment we
                  deliver.
                </p>
                <p data-aos="fade-left" data-aos-duration="2000">
                  At Dentica Dental Studio, we are proud of our artistic ability
                  as well as our craftsmanship. We give you the tools you need
                  to give your patients more than simply attractive,
                  self-assured smiles—we give them useful works of art that make
                  an impression.
                </p>
                <p data-aos="fade-left" data-aos-duration="2000">
                  Select Dentica Dental Studio to start a journey where dental
                  skill and creative innovation converge to produce genuinely
                  unique smiles.
                </p>
              </div>
            </div>
            <div
              className="about-p1-img"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="image-box">
                <div className="shape">
                  <div className="shape-1"></div>
                  <div className="shape-2"></div>
                </div>
                <div className="box">
                  <figure className="box-1 thumb">
                    <img src={box1} alt="" />
                  </figure>
                  <figure className="box-2 thumb">
                    <img src={box2} alt="" />
                  </figure>
                  <figure className="box-3 thumb">
                    <img src={box3} alt="" />
                  </figure>
                </div>
                <figure className="image">
                  <img src={about_center} alt="" />
                </figure>
                <div className="text">
                  <h2>
                    12 <span>+</span>
                  </h2>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="about-p2" data-aos="fade-up" data-aos-duration="2000">
            <div className="about-p2-title">
              <h1>Why Choose Us</h1>
            </div>
            <div className="about-p2-txt">
              <p data-aos="fade-up" data-aos-duration="1000">
                Dentica Dental Studio, which provides everything from the
                greatest restorations to customer service, serves the dental
                sector brilliantly. We take great satisfaction in the
                consistency we provide to each of our clients and their
                patients.
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                Given the value of your chair time, we are dedicated to
                providing you with a flawless, long-lasting repair every time,
                on schedule. You spend less time in your chair and have fewer
                headaches with our hassle-free service.
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                The medical professionals with whom we deal understand the value
                of a reputable reputation and the advantages it may provide for
                the growth and extension of their practice. We take pride in and
                will make every effort to contribute to the success, growth, and
                reputation of your business because we understand the value of a
                delighted patient, which has assisted our customers in
                developing a famous reputation and practice.
              </p>
              <p data-aos="fade-up" data-aos-duration="1000">
                We are always striving to improve, and we enjoy receiving
                feedback. By having strong business ties and open lines of
                communication with our clients, we can continue to be
                successful. In order to thoroughly satisfy both our clients and
                their patients, we are dedicated to making sure that every case
                is outstanding.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Digital Dentristry Started */}
      <section className="home-dent-section">
        <div className="home-dent-main">
          <div className="home-dent-sub" style={{ overflow: "hidden" }}>
            <div
              className="dent-image-column"
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <div className="dent-img-box">
                <div className="dent-img-main">
                  <Link to="/digital-dentistry" onClick={handleNavClick}>
                    <img src={dent} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="dent-content-column">
              <div className="dent-content-head">
                <a href="">
                  <h1 data-aos="fade-right" data-aos-duration="3000">
                    Digital Dentristry
                  </h1>
                </a>
              </div>
              <div className="dent-content-txt">
                <p data-aos="fade-right" data-aos-duration="3000">
                  Digital dentistry revolutionizes dental care through advanced
                  technologies, enabling precise diagnostics, treatment
                  planning, and patient communication.
                </p>
              </div>
              <div className="dent-content-data">
                <p data-aos="fade-right" data-aos-duration="3000">
                  Digital dentistry is the use of computer-aided design and
                  computer-aided manufacturing (CAD/CAM) to produce dental
                  prosthetics and devices. It encompasses a range of digital
                  technologies, including 3D imaging, digital impressions,
                  chairside milling, and 3D printing. These technologies are
                  used to create customised restorations and devices, such as
                  crowns, bridges, dentures, veneers, and implants. Modern
                  dentistry is a rapidly growing field, and as technology
                  continues to advance, it is becoming increasingly popular in
                  dental practices around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product section started */}
      <section
        className="home-product-section"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ overflow: "hidden" }}
      >
        <div className="home-product-main">
          <div className="home-product-sub">
            <div className="home-product-head">
              <span className="home-product-sub-title">Product</span>
              <h1>Dentica Products</h1>
            </div>
            <div className="home-product-content">
              <div className="home-product-content-sub">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  // navigation={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  {/* {productData.map((ele,id)=>
                  <SwiperSlide key={id}>
                    <div className="home-product-slider-main">
                      <div className="home-product-slider-img-box">
                        <div className="home-product-slider-img-sub">
                          <Link
                            to="/products/implants"
                            onClick={handleNavClick}
                          >
                            <img src={ele.header_image} alt="header_image" />
                          </Link>
                        </div>
                      </div>
                      <div className="home-product-slider-txt">
                        <Link to="/products/implants" onClick={handleNavClick}>
                          <h1>{ele.title}</h1>
                        </Link>
                        <p>
                          {ele.short_description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  )} */}
                  <SwiperSlide>
                    <div className="home-product-slider-main">
                      <div className="home-product-slider-img-box">
                        <div className="home-product-slider-img-sub">
                          <Link
                            to="/products/lithium-disilicate"
                            onClick={handleNavClick}
                          >
                            <img src={prod_slider2} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="home-product-slider-txt">
                        <Link
                          to="/products/lithium-disilicate"
                          onClick={handleNavClick}
                        >
                          <h1>Lithium-Disilicate</h1>
                        </Link>
                        <p>
                          Use our high-end lithium disilicate dental products to
                          enhance the shine of your smile. Discover the ideal
                          fusion of precision, beauty, and strength for your
                          ideal smile.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-product-slider-main">
                      <div className="home-product-slider-img-box">
                        <div className="home-product-slider-img-sub">
                          <Link to="/products/den-zir" onClick={handleNavClick}>
                            <img src={prod_slider3} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="home-product-slider-txt">
                        <Link to="/products/den-zir" onClick={handleNavClick}>
                          <h1>Den-zir</h1>
                        </Link>
                        <p>
                          With Den-Zir, explore the future of dental perfection.
                          For smiles that truly shine, our cutting-edge Zirconia
                          dental solutions combine sturdiness, beauty, and
                          precision.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-product-slider-main">
                      <div className="home-product-slider-img-box">
                        <div className="home-product-slider-img-sub">
                          <Link
                            to="/products/dmls-pfm"
                            onClick={handleNavClick}
                          >
                            <img src={prod_slider4} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="home-product-slider-txt">
                        <Link to="/products/dmls-pfm" onClick={handleNavClick}>
                          <h1>DMLS PFM</h1>
                        </Link>
                        <p>
                          Introducing DMLS PFM: The Ultimate in Precision,
                          Aesthetics, and Durability - Crafted to Perfection and
                          Unveiled: The Future of Dental Excellence.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-product-slider-main">
                      <div className="home-product-slider-img-box">
                        <div className="home-product-slider-img-sub">
                          <Link
                            to="/products/removable"
                            onClick={handleNavClick}
                          >
                            <img src={prod_slider5} alt="" />
                          </Link>
                        </div>
                      </div>
                      <div className="home-product-slider-txt">
                        <Link to="/products/removable" onClick={handleNavClick}>
                          <h1>Removable</h1>
                        </Link>
                        <p>
                          Experience the joy of removable orthodontics: Our
                          products offer perfect comfort and confidence.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="home-product-mobile">
                <div className="home-product-mobile-sub">
                  <div className="home-product-mobile-content-box">
                    <div className="home-product-mobile-img-box">
                      <Link to="/products/implants" onClick={handleNavClick}>
                        <div className="home-product-mobile-img">
                          <img src={prod_slider1} alt="" />
                        </div>
                        <h1>Implants</h1>
                      </Link>
                    </div>
                    <div className="home-product-mobile-txt">
                      <p>
                        With our state-of-the-art dental implants, open the door
                        to a world of confident smiles. With the power and
                        dependability you can rely on, restore your natural
                        beauty and functionality.
                      </p>
                    </div>
                  </div>
                  <div className="home-product-mobile-content-box">
                    <div className="home-product-mobile-img-box">
                      <Link
                        to="/products/lithium-disilicate"
                        onClick={handleNavClick}
                      >
                        <div className="home-product-mobile-img">
                          <img src={prod_slider2} alt="" />
                        </div>
                        <h1>Lithium-Disilicate</h1>
                      </Link>
                    </div>
                    <div className="home-product-mobile-txt">
                      <p>
                        Use our high-end lithium disilicate dental products to
                        enhance the shine of your smile. Discover the ideal
                        fusion of precision, beauty, and strength for your ideal
                        smile.
                      </p>
                    </div>
                  </div>
                  <div className="home-product-mobile-content-box">
                    <div className="home-product-mobile-img-box">
                      <Link to="/products/den-zir" onClick={handleNavClick}>
                        <div className="home-product-mobile-img">
                          <img src={prod_slider3} alt="" />
                        </div>
                        <h1>Den-zir</h1>
                      </Link>
                    </div>
                    <div className="home-product-mobile-txt">
                      <p>
                        With Den-Zir, explore the future of dental perfection.
                        For smiles that truly shine, our cutting-edge Zirconia
                        dental solutions combine sturdiness, beauty, and
                        precision.
                      </p>
                    </div>
                  </div>
                  <div className="home-product-mobile-content-box">
                    <div className="home-product-mobile-img-box">
                      <Link to="/products/dmls-pfm" onClick={handleNavClick}>
                        <div className="home-product-mobile-img">
                          <img src={prod_slider4} alt="" />
                        </div>
                        <h1>DMLS PFM</h1>
                      </Link>
                    </div>
                    <div className="home-product-mobile-txt">
                      <p>
                        Introducing DMLS PFM: The Ultimate in Precision,
                        Aesthetics, and Durability - Crafted to Perfection and
                        Unveiled: The Future of Dental Excellence.
                      </p>
                    </div>
                  </div>
                  <div className="home-product-mobile-content-box">
                    <div className="home-product-mobile-img-box">
                      <Link to="/products/removable" onClick={handleNavClick}>
                        <div className="home-product-mobile-img">
                          <img src={prod_slider5} alt="" />
                        </div>
                        <h1>Removable</h1>
                      </Link>
                    </div>
                    <div className="home-product-mobile-txt">
                      <p>
                        Experience the joy of removable orthodontics: Our
                        products offer perfect comfort and confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="home-gallery-section"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ overflow: "hidden" }}
      >
        <div className="home-gallary-main">
          <div className="home-gallary-sub">
            <div className="home-gallary-head">
              <div className="home-gallary-txt">
                <span>GALLARY</span>
              </div>
              <h1>Dentica Dental Studio</h1>
            </div>
            <div className="home-gallary-content">
              <div className="home-gallary-content-slider">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  // navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="home-gallary-btn">
                <Link to="/gallary" onClick={handleNavClick}>
                  SEE MORE
                </Link>
              </div>
            </div>
            <div className="mobile-home-gallary-content">
              <div className="home-gallary-content-slider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={20}
                  loop={true}
                  centeredSlides={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  // navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider1} alt="" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="home-gallary-swiper-sub">
                      <img src={gal_slider2} alt="" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="home-gallary-btn">
                <Link to="/gallary" onClick={handleNavClick}>
                  SEE MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="home-review-section"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ overflow: "hidden" }}
      >
        <div className="home-review-main">
          <div className="home-review-sub">
            <div className="home-review-head">
              <h3>REVIEW</h3>
              <h1>Doctor's Review</h1>
            </div>
            <div className="home-review-content">
              <div className="home-review-content-box">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="home-review-mobile-content-box">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="review-slider">
                    <div className="home-review-content-inner">
                      <div className="home-review-inner-head">
                        <h1>Good Services !</h1>
                      </div>
                      <div className="home-review-inner-content">
                        <div className="home-review-inner-img">
                          <img src={review_img} alt="Review" />
                        </div>
                        <h1>Dr. YashpalSinh</h1>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="home-msg-section"
        data-aos="fade-up"
        data-aos-duration="3000"
        style={{ overflow: "hidden" }}
      >
        <div className="home-msg-main">
          <div className="home-msg-sub">
            <div className="home-msg-head">
              <div className="home-msg-head-txt">
                <span>SEND A MESSAGE</span>
              </div>
              <h1>
                Drop a line & get a reply <br /> from our team
              </h1>
            </div>
            <div className="home-msg-form-main">
              <form className="home-msg-form">
                <div className="home-msg-form-p1">
                  <div className="home-msg-input-div">
                    <p>Name</p>
                    <div>
                      <input type="text" placeholder="Name" />
                      <span>
                        <FaUser />
                      </span>
                    </div>
                  </div>
                  <div className="home-msg-input-div">
                    <p>Email</p>
                    <div>
                      <input type="text" placeholder="Email" />
                      <span>
                        <MdEmail />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-msg-form-p2">
                  <div className="home-msg-input-div">
                    <p>Phone</p>
                    <div>
                      <input type="text" placeholder="Phone" />
                      <span>
                        <FaPhone />
                      </span>
                    </div>
                  </div>
                  <div className="home-msg-input-div">
                    <p>Subject</p>
                    <div>
                      <input type="text" placeholder="Subject" />
                      <span>
                        <FaBook />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-msg-form-p3">
                  <div className="home-msg-input-div home-msg-txt-area">
                    <p>Message</p>
                    <div>
                      <textarea id="" cols="30" rows="10" />
                      <span>
                        <FaTextWidth />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-msg-form-submit">
                  <input type="submit" value="SEND MESSAGE" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
