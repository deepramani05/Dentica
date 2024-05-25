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
import Dentbenefit from "../pages/Dentbenefit.jsx";
import Dentalshow from "../pages/Dentalshow.jsx";
import Gallary from "../pages/Gallary.jsx";
import StlFile from "../pages/StlFile.jsx";
import Socialmedia from "../pages/Socialmedia.jsx";
import SubProducts from "../pages/SubProducts.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Adminhome from "../pages/Adminhome.jsx";
import User from "../pages/User.jsx";
import AdminAboutUs from "../pages/AdminAboutUs.jsx";
import AdminAboutEdit from "../pages/AdminAboutEdit.jsx";
import AdminGallery from "../pages/AdminGallery.jsx";
import AdminGalleryedit from "../pages/AdminGalleryedit.jsx";
import AdminContact from "../pages/AdminContact.jsx";
import AdminContactView from "../pages/AdminContactView.jsx";
import AdminCareer from "../pages/AdminCareer.jsx";
import AdminBlog from "../pages/AdminBlog.jsx";
import AdminBlogAdd from "../pages/AdminBlogAdd.jsx";
import AdminBlogEdit from "../pages/AdminBlogEdit.jsx";
import AdminProduct from "../pages/AdminProduct.jsx";
import AdminProductAdd from "../pages/AdminProductAdd.jsx";
import AdminProductEdit from "../pages/AdminProductEdit.jsx";
import AdminReview from "../pages/AdminReview.jsx";
import AdminReviewEdit from "../pages/AdminReviewEdit.jsx";
import AdminMeta from "../pages/AdminMeta.jsx";
import AdminMetaEdit from "../pages/AdminMetaEdit.jsx";
import AdminTeamEdit from "../pages/AdminTeamEdit.jsx";
import AdminTeam from "../pages/Adminteam.jsx";
import AdminStl from "../pages/AdminStl.jsx";
import AdminEventCat from "../pages/AdminEventCat.jsx";
import AdminEventCatEdit from "../pages/AdminEventCatEdit.jsx";
import AdminEvent from "../pages/AdminEvent.jsx";
import AdminEventAdd from "../pages/AdminEventAdd.jsx";
import AdminEventEdit from "../pages/AdminEventEdit.jsx";

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
        <Route path="/blog/:id" element={<Dentbenefit />} />
        <Route path="/carrier" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Dentalshow  />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/submit-stl-file" element={<StlFile />} />
        <Route path="/quick-Links" element={<Socialmedia />} />
        <Route path="*" element={<NotFound/>}/>
        {/* admin-routes */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/home" element={<Adminhome />} />
        <Route path="/admin/users" element={<User />}/>
        <Route path="/admin/about-us" element={<AdminAboutUs/>}/>
        <Route path="/admin/about/edit/:id" element={<AdminAboutEdit/>}/>
        <Route path="/admin/gallery" element={<AdminGallery/>}/>
        <Route path="/admin/gallery/edit/:id" element={<AdminGalleryedit />} />
        <Route path="/admin/contact" element={<AdminContact/>}/>
        <Route path="/admin/contact/:id" element={<AdminContactView/>}/>
        <Route path="/admin/career" element={<AdminCareer/>}/>
        <Route path="/admin/blog" element={<AdminBlog/>}/>
        <Route path="/admin/blog/add" element={<AdminBlogAdd/>}/>
        <Route path="/admin/blog/edit/:id" element={<AdminBlogEdit/>}/>
        <Route path="/admin/Product" element={<AdminProduct/>}/>
        <Route path="/admin/Product/add" element={<AdminProductAdd/>}/>
        <Route path="/admin/Product/edit/:id" element={<AdminProductEdit/>}/>
        <Route path="/admin/Review" element={<AdminReview/>}/>
        <Route path="/admin/Review/edit/:id" element={<AdminReviewEdit/>}/>
        <Route path="/admin/Meta" element={<AdminMeta/>}/>
        <Route path="/admin/Meta/edit/:id" element={<AdminMetaEdit/>}/>
        <Route path="/admin/team" element={<AdminTeam />}/>
        <Route path="/admin/team/edit/:id" element={<AdminTeamEdit/>}/>
        <Route path="/admin/stl" element={<AdminStl/>}/>
        <Route path="/admin/event-category" element={<AdminEventCat />}/>
        <Route path="/admin/event-category/edit/:id" element={<AdminEventCatEdit/>}/>
        <Route path="/admin/event" element={<AdminEvent />} />
        <Route path="/admin/event/add" element={<AdminEventAdd />} />
        <Route path="/admin/event/edit/:id" element={<AdminEventEdit/>}/>
      </Routes>
    </div>
  );
};

export default AllRoutes;
