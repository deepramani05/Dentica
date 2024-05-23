import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Products = () => {
  const [productData, setProductData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://denticadentalstudio.com/webapp/api/product`)
      .then((res) => {
        console.log(res.data);
        setProductData(res.data.data.product);
        console.log(productData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // Set loading to false when fetching data completes
        setLoading(false);
      });
  }, []);

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="product-page-main">
      {loading ? (
        <div className="preloaderContainer">
          <div className="preloaderBg">
            <div className="preloader"></div>
            <div className="preloader2"></div>
          </div>
        </div>
      ) : (
        <div className="product-page-sub">
          <div className="pages-banner">
            <div className="pages-banner-sub">
              <div className="pages-content-box">
                <h1>Products</h1>
                <ul className="pages-ul">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Product</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="product-page-data">
            <div className="product-page-data-head">
              <h1>Dentica Products</h1>
            </div>
            <div className="product-page-content-main">
              {productData
                .filter((ele) => ele.product_type === 2)
                .map((ele) => (
                  <div className="product-page-content-p1" key={ele.id}>
                    <div className="product-page-content-box">
                      <div className="product-content-img home-product-slider-img-sub">
                        <Link
                          to={`/product/${ele.id}`}
                          onClick={handleNavClick}
                        >
                          <img src={ele.image} alt={ele.title} />
                        </Link>
                      </div>
                      <div className="product-content-txt">
                        <Link to={`/product/${ele.id}`}>{ele.title}</Link>
                        <div className="product-content-p">
                          <p>{ele.short_description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
