// Home.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Link as LinkScroll } from "react-scroll";
import HomeComponent from "../Components/HomeComponent";
import About from "../Pages/About";
import Index from "../Pages/Index";
import Contact from "../Pages/Contact";

export default function Home({ setShowNav }) {
    useEffect(() => {
    setShowNav(true);
    }, [setShowNav]);

    return (
      <div id="home" className="h-full w-full lg:px-24">
          <HomeComponent setShowNav={setShowNav} />
          <About  />
          <Index setShowNav={setShowNav} />
          <Contact />
      </div>
    );
}


Home.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};