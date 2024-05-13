import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import benefit_img from "../img/dent_page.png";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Dentbenefit = () => {
  let [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("https://denticadentalstudio.com/api/blogs")
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data.data.blog);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(blogData);

  return (
    <div className="benefit-main">
      <div className="benefit-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Blog</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="blog-map-main">
          {blogData &&
            blogData.map((ele) => (
              <div className="benefit-data-main">
                <div className="benefits-data-p1">
                  <div className="benefit-p1-img">
                    <img src={ele.image} alt="" />
                  </div>
                  <div className="benefit-p1-content">
                    <div className="benefit-p1-content-cat">
                      <h1>Categories</h1>
                      <Link>
                        <span>
                          <FaArrowRight />
                        </span>
                        Latest Blog
                      </Link>
                    </div>
                    <div className="benefit-p1-content-btn-main">
                      <h1>Tags :</h1>
                      <div className="benefit-p1-content-btn">
                        <div>
                          <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                            Top 5 benefits of digital dentistry
                          </Link>
                          <br />
                        </div>
                        <div>
                          <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                            Digital Dentristry
                          </Link>
                        </div>
                        <div>
                          <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                            Digital Dentristry
                          </Link>
                          <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                            PFM
                          </Link>
                          <Link to="/blog/Top-5-benefits-of-digital-dentistry">
                            Den-zir
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="benefits-data-p2">
                  <div className="benefits-data-p2-head">
                    <h1>{ele.meta_title}</h1>
                  </div>
                  <div className="benefits-data-p2-txt">
                    <p
                      dangerouslySetInnerHTML={{ __html: ele.description }}
                    ></p>
                  </div>
                </div>
                <div className="benefits-data-p3">
                  <h1>Latest Blog</h1>
                  <div className="benefits-data-p3-inner-box">
                    <img src={benefit_img} alt="" />
                    <div>
                      <Link to="#">{ele.short_description}</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dentbenefit;
