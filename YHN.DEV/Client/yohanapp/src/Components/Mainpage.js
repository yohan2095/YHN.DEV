
import Intro from "./Intro";
import "./Mainpage.css";
import NavBarComp from "./Navbar";
import HomeComp from "./Home";
import Mywork from "./Mywork";
import Contact from "./Contact";
import Service from "./Service";
import Footer from "./Footer";

function MainPageComp() {
  return (
    <div className='mainpage'>
      <NavBarComp />

      <HomeComp />

      <Intro />

      <Mywork />

      {/*<Service />*/}

      <Contact />

      <Footer />
      
    </div>
  );
}

export default MainPageComp;
