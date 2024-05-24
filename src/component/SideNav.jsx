import React, { useEffect, useRef, useState } from "react";
import logo from "../img/Logo.png"
import "../css/admin.css"
import { FaUsers } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsBagFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { TbCylinder } from "react-icons/tb";
import { FaUserDoctor } from "react-icons/fa6";
import { BsBagDash } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState); // Toggle isOpen state
  };
  return (
    <div ref={sidebarRef}>
      <aside
        className={`main-sidebar elevation-4 text-left ${
          isOpen ? "sidebar-open" : ""
        } ${isMobile ? "mobile-sidebar" : ""}`}
        style={{
          backgroundColor: "#256f98",
          height: "100%",
          overflowY: "auto",
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "250px",
        }}
      >
        {/* Brand Logo */}
        <a
          href="/admin/home"
          className="brand-link sidebar-light-primary"
          onClick={isMobile ? toggleSidebar : undefined}
          style={{padding:"0" }}
        >
          <img src={logo} alt="" style={{ width: "50%", margin: "10px 0"}} />
        </a>

        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column side-ul"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Dashboard */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/dashboard" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/dashboard"
                  className={`nav-link ${
                    location.pathname === "/admin/dashboard" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>Dashboard</p>
                </a>
              </li>

              {/* Users */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/users" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/users"
                  className={`nav-link ${
                    location.pathname === "/admin/users" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <FaUsers />
                  </i>
                  <p>Users</p>
                </a>
              </li>

              {/* Home */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/home" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/home"
                  className={`nav-link ${
                    location.pathname === "/admin/home" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <BiHome />
                  </i>
                  <p>Home</p>
                </a>
              </li>

              {/* About Us */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/about-us" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/about-us"
                  className={`nav-link ${
                    location.pathname === "/admin/about-us" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <BsInfoCircle />
                  </i>
                  <p>About Us</p>
                </a>
              </li>

              {/* Gallery */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/gallery" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/gallery"
                  className={`nav-link ${
                    location.pathname === "/admin/galleryy" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <BsFillImageFill />
                  </i>
                  <p>Gallery</p>
                </a>
              </li>

              {/* Contacts */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/contact" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/contact"
                  className={`nav-link ${
                    location.pathname === "/admin/contact" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <BsFillTelephoneFill />
                  </i>
                  <p>Contacts</p>
                </a>
              </li>

              {/* Career */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/career" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/career"
                  className={`nav-link ${
                    location.pathname === "/admin/career" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <BsBagFill />
                  </i>
                  <p>Career</p>
                </a>
              </li>

              {/* Blog */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/blog" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/blog"
                  className={`nav-link ${
                    location.pathname === "/admin/blog" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <FaPencilAlt />
                  </i>
                  <p>Blog</p>
                </a>
              </li>

              {/* Products */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/product" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/product"
                  className={`nav-link ${
                    location.pathname === "/admin/product" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <AiOutlineShoppingCart />
                  </i>
                  <p>Products</p>
                </a>
              </li>

              {/* Review */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/review" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/review"
                  className={`nav-link ${
                    location.pathname === "/admin/review" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <AiFillStar />
                  </i>
                  <p>Review</p>
                </a>
              </li>

              {/* Meta */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/meta" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/meta"
                  className={`nav-link ${
                    location.pathname === "/admin/meta" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <TbCylinder />
                  </i>
                  <p>Meta</p>
                </a>
              </li>

              {/* Team */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/team" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/team"
                  className={`nav-link ${
                    location.pathname === "/admin/team" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <FaUserDoctor />
                  </i>
                  <p>Team</p>
                </a>
              </li>

              {/* STL */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/stl" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/stl"
                  className={`nav-link ${
                    location.pathname === "/admin/stl" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <BsBagDash />
                  </i>
                  <p>STL</p>
                </a>
              </li>

              {/* Event Category */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/event-catagory" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/event-catagory"
                  className={`nav-link ${
                    location.pathname === "/admin/event-catagory" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <SlCalender />
                  </i>
                  <p>Event Category</p>
                </a>
              </li>

              {/* Event */}
              <li
                className={`nav-item ${
                  location.pathname === "/admin/event" ? "menu-open" : ""
                }`}
              >
                <a
                  href="/admin/event"
                  className={`nav-link ${
                    location.pathname === "/admin/event" ? "active" : ""
                  }`}
                >
                  <i className="nav-icon">
                    <SlCalender />
                  </i>
                  <p>Event</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  )
}

export default SideNav