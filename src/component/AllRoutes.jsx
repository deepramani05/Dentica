import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import DigitalDentistry from "../pages/DigitalDentistry.jsx";
import Blog from "../pages/Blog.jsx";
import Career from "../pages/Career.jsx";
import Contact from "../pages/Contact.jsx";
import Review from "../pages/Review.jsx";
import Events from "../pages/Event.jsx";
import Implants from "../pages/Implants.jsx";
import LithiumDisilicate from "../pages/LithiumDisilicate.jsx";
import DenZir from "../pages/DenZir.jsx";
import DmlsPfm from "../pages/DmlsPfm.jsx";
import Removable from "../pages/Removable.jsx";
import Dentbenefit from "../pages/Dentbenefit.jsx";
import Dentalshow from "../pages/Dentalshow.jsx";
import Gallary from "../pages/Gallary.jsx";
import StlFile from "../pages/StlFile.jsx";
import Socialmedia from "../pages/Socialmedia.jsx";
import SubProducts from "../pages/SubProducts.jsx";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<SubProducts />} />
        <Route path="/digital-dentistry" element={<DigitalDentistry />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carrier" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallary" element={<Gallary />} />

        <Route path="/product/implants" element={<Implants />} />
        <Route
          path="/product/lithium-disilicate"
          element={<LithiumDisilicate />}
        />
        <Route path="/product/den-zir" element={<DenZir />} />
        <Route path="/product/dmls-pfm" element={<DmlsPfm />} />
        <Route path="/product/removable" element={<Removable />} />

        <Route
          path="/blog/:slug"
          element={<Dentbenefit />}
        />

        <Route
          path="/events/gujarat-dental-show-2024"
          element={<Dentalshow />}
        />

        <Route path="/submit-stl-file" element={<StlFile />} />

        <Route path="/quick-Links" element={<Socialmedia />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
