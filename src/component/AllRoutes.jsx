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

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/digital-dentistry" element={<DigitalDentistry />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/carrier" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallary" element={<Gallary/>}/>


        <Route path="/products/implants" element={<Implants />} />
        <Route
        path="/products/lithium-disilicate"
          element={<LithiumDisilicate />}
        />
        <Route path="/products/den-zir" element={<DenZir />} />
        <Route path="/products/dmls-pfm" element={<DmlsPfm />} />
        <Route path="/products/removable" element={<Removable />} />


        <Route path='/blog/Top-5-benefits-of-digital-dentistry' element={<Dentbenefit/>} />

        <Route path="/events/gujarat-dental-show-2024" element={<Dentalshow />} />

        <Route path="/submit-stl-file" element={<StlFile/>}/>

      </Routes>
    </div>
  );
};

export default AllRoutes;
