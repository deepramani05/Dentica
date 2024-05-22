import "./App.css";
import './css/style.css';
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AllRoutes from "./component/AllRoutes";
import './css/responsive.css'
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const validRoutes = [ "/","/about","/product",
    "/digital-dentistry","/blog","/carrier","/contact","/review",
    "/events","/gallery","/quick-Links"];

  const isPathValid =(pathname) =>{
    return validRoutes.includes(pathname) || pathname.match(/^\/(product|blog|events)\/[^/]+$/);
  }
  const isNotFoundpage = !isPathValid(location.pathname);
  // const isNotFoundpage = !validRoutes.includes(location.pathname) && location.pathname !== "/notfound";
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
      {!isNotFoundpage && <Nav />}
      <AllRoutes />
      <a href="#" class="back-to-top" onClick={backToTopButton} >
        <FaArrowUp />
      </a>
      {!isNotFoundpage && <Footer />}
    </div>
  );
}

export default App;
