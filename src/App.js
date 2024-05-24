import "./App.css";
import './css/style.css';
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AllRoutes from "./component/AllRoutes";
import './css/responsive.css';
import './css/admin.css';
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Header from "./component/Header";
import SideNav from "./component/SideNav";
import AdminFooter from "./component/AdminFooter";

function App() {
  const location = useLocation();
  /* check for url start */
    const validRoutes = [ "/","/about","/product",
      "/digital-dentistry","/blog","/carrier","/contact","/review",
      "/events","/gallery","/quick-Links"];
    const isPathValid =(pathname) =>{
      return validRoutes.includes(pathname) || pathname.match(/^\/(product|blog|events)\/[^/]+$/);
    }
    const isNotFoundpage = !isPathValid(location.pathname);
  /* url checking over */
  
  /*checking for Admin url */
  const isAdminRoute = location.pathname.match('/admin') && location.pathname !== "/admin";
  const isDashboardPage = location.pathname === "/admin/dashboard";

  const backToTopButton = document.querySelector(".back-to-top")  ;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  return (
    <div className="App">
      {isAdminRoute && <Header />}
      {isAdminRoute && <SideNav />}
      {!isNotFoundpage && <Nav />}
      <AllRoutes />
      <a href="#" class="back-to-top" onClick={backToTopButton} >
        <FaArrowUp />
      </a>
      {!isNotFoundpage && <Footer />}
      {isAdminRoute && isDashboardPage && <AdminFooter />}

    </div>
  );
}

export default App;
