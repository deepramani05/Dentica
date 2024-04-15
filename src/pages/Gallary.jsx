import React, { useState } from "react";
import { Link } from "react-router-dom";
import gallary1 from "../img/home_gallary-1.jpg";
import gallary2 from "../img/home-gallary-2.jpg";

const Gallary = () => {
  const categories = ["All", "BeforeAfter", "Product"];
  const images = {
    All: [gallary1, gallary2],
    BeforeAfter: [gallary2],
    Product: [gallary1],
  };

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="gallary-main">
      <div className="gallary-sub">
        <div className="pages-banner">
          <div className="pages-banner-sub">
            <div className="pages-content-box">
              <h1>Gallary</h1>
              <ul className="pages-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Gallary</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="gallary-page-content">
          <div className="gallary-page-content-sub">
            <ul className="gallary-content-menu">
              <div className="gallary-content-menu-btn">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </ul>
            <ul className="gallary-content-img">
              <div className="gallary-content-img-main">
                {images[selectedCategory].map((image) => (
                  <div>
                    <img key={image} src={image} alt={selectedCategory} />
                  </div>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
