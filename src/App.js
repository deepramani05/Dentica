import "./App.css";
import './css/style.css';
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import AllRoutes from "./component/AllRoutes";
import './css/responsive.css'
import { FaArrowUp } from "react-icons/fa";

function App() {

  const backToTopButton = document.querySelector(".back-to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled");
    }
  });

  return (
    <div className="App">
      <Nav />
      <AllRoutes />
      <a href="#" class="back-to-top" onClick={backToTopButton} >
        <FaArrowUp />
      </a>
      <Footer />
    </div>
  );
}

export default App;
