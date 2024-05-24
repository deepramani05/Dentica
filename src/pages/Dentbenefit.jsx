import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import benefit_img from "../img/dent_page.png";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Dentbenefit = () => {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  let [allblog, setAllBlog] = useState([]);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    axios
      .post(`https://denticadentalstudio.com/webapp/api/show/blog`, { id })
      .then((res) => {
        console.log(res.data);
        setBlogData(res.data.data.blog);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://denticadentalstudio.com/webapp/api/blogs`)
      .then((res) => {
        console.log(res.data.data.blog);
        setAllBlog(res.data.data.blog);
        console.log(allblog);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="benefit-main">
      {loading && (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      )}
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
        {blogData && (
          <div className="blog-map-main">
            <div className="benefit-data-main">
              <div className="benefits-data-p1">
                <div className="benefit-p1-img">
                  <img src={blogData.image} alt="" />
                </div>
                <div className="benefit-p1-content">
                  <div className="benefit-p1-content-cat">
                    <h1>Categories</h1>
                    <Link to="#">
                      <span>
                        <FaArrowRight />
                      </span>
                      Latest Blog
                    </Link>
                  </div>
                  <div className="benefit-p1-content-btn-main">
                    <h1>Tags :</h1>
                    <div className="benefit-p1-content-btn">
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {blogData.meta_tag &&
                          blogData.meta_tag.map((tag, index) => (
                            <Link to="#" key={index} style={{ margin: "5px" }}>
                              <p style={{ margin: "0" }}>{tag}</p>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="benefits-data-p2">
                <div className="benefits-data-p2-head">
                  <h1>{blogData.meta_title}</h1>
                </div>
                <div className="benefits-data-p2-txt">
                  <p
                    dangerouslySetInnerHTML={{ __html: blogData.description }}
                  ></p>
                </div>
              </div>
              <div className="benefits-data-p3">
                <h1>Latest Blog</h1>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    gap: "10px",
                  }}
                >
                  {allblog.map((ele) => (
                    <div className="benefits-data-p3-inner-box">
                      <img src={ele.image} alt="" />
                      <div>
                        <Link to={`/blog/${ele.id}`} onClick={handleNavClick}>
                          {ele.short_description}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dentbenefit;
