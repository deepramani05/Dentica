import React from "react";
import { Link } from "react-router-dom";
import prod_content1 from "../img/product_content-1.jpg";
import prod_content2 from "../img/product_content-2.png";
import prod_content3 from "../img/product_content-3.jpg";
import prod_content4 from "../img/product_content-4.jpg";
import prod_content5 from "../img/product_content-5.jpg";

const Products = () => {
  return (
    <div className="product-page-main">
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
            <div className="product-page-content-p1">
              <div className="product-page-content-box">
                <div className="product-content-img home-product-slider-img-sub">
                  <Link to="/products/lithium-disilicate">
                    <img src={prod_content1} alt="" />
                  </Link>
                </div>
                <div className="product-content-txt">
                  <Link to="/products/lithium-disilicate">
                    Lithium-Disilicate
                  </Link>
                  <div className="product-content-p">
                    <p>
                      Use our high-end lithium disilicate dental products to
                      enhance the shine of your smile. Discover the ideal fusion
                      of precision, beauty, and strength for your ideal smile.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-page-content-box">
                <div className="product-content-img home-product-slider-img-sub">
                  <Link to="/products/removable">
                    <img src={prod_content2} alt="" />
                  </Link>
                </div>
                <div className="product-content-txt">
                  <Link to="/products/removable">Removable</Link>
                  <div className="product-content-p">
                    <p>
                      Experience the joy of removable orthodontics: Our products
                      offer perfect comfort and confidence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-page-content-box">
                <div className="product-content-img home-product-slider-img-sub">
                  <Link to="/products/implants">
                    <img src={prod_content3} alt="" />
                  </Link>
                </div>
                <div className="product-content-txt">
                  <Link to="/products/implants">Implants</Link>
                  <div className="product-content-p">
                    <p>
                      With our state-of-the-art dental implants, open the door
                      to a world of confident smiles. With the power and
                      dependability you can rely on, restore your natural beauty
                      and functionality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-page-content-box">
                <div className="product-content-img home-product-slider-img-sub">
                  <Link to="/products/den-zir">
                    <img src={prod_content4} alt="" />
                  </Link>
                </div>
                <div className="product-content-txt">
                  <Link to="/products/den-zir">Den-zir</Link>
                  <div className="product-content-p">
                    <p>
                      With Den-Zir, explore the future of dental perfection. For
                      smiles that truly shine, our cutting-edge Zirconia dental
                      solutions combine sturdiness, beauty, and precision.
                    </p>
                  </div>
                </div>
              </div>
              <div className="product-page-content-box">
                <div className="product-content-img home-product-slider-img-sub">
                  <Link to="/products/dmls-pfm">
                    <img src={prod_content5} alt="" />
                  </Link>
                </div>
                <div className="product-content-txt">
                  <Link to="/products/dmls-pfm">DMLS PFM</Link>
                  <div className="product-content-p">
                    <p>
                      Introducing DMLS PFM: The Ultimate in Precision,
                      Aesthetics, and Durability - Crafted to Perfection and
                      Unveiled: The Future of Dental Excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
