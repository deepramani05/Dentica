import React from "react";
import { Link } from "react-router-dom";
import blog_img from "../img/dent_page.png";

const Blog = () => {
  return (
    <div className="blog-page-main">
      <div className="blog-page-sub">
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
        <div className="blog-page-data">
          <div className="blog-page-data-sub">
            <div className="blog-page-data-img">
              <img src={blog_img} alt="" />
            </div>
            <div className="blog-page-content-main-txt">
              <div className="blog-page-data-txt">
                <h1>Top 5 benefits of digital dentistry</h1>
                <p>
                  Desires to obtain pain of itself because it is pain but
                  because occasionally circumstances occur in ...
                </p>
              </div>
              <div className="blog-page-data-btn">
                <h1>09 August, 2023</h1>
                <Link to='/blog/Top-5-benefits-of-digital-dentistry'>Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
