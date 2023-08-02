/* eslint-disable react/no-unescaped-entities */
// AboutMe.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AboutMe() {
    // State for showing the image
    const [ showImg, setShowImg ] = useState(true);
    // Function to toggle the showImg state
    const toggleImg = () => {
      setShowImg(!showImg);
    };

    return (
      <div className="flex flex-col items-center lg:flex-row lg:justify-evenly gap-8">
        {/* Header and Bio container */}
        <div className="text-lg text-black dark:text-gray rounded-lg max-w-[600px]">
          {/* Header */}
          <h2 className="text-4xl text-primary dark:text-gray font-semibold">
            Hi, I'm <span className="text-primary">Joshua</span>
          </h2>
          <br />
          {/* Bio text */}
          <p>
            Thank you for visiting my page. I'm currently a developer and
            saxophonist that loves to express my creativity through code and
            music. Within the past year I've been able to grow as a developer
            during my time as a fellow at{" "}
            <Link
              to={"https://www.pursuit.org/hire-from-pursuit"}
              className="text-primary font-bold hover:underline underline-offset-2"
              target="_blank"
            >
              Pursuit
            </Link>
            . Learning from others and connecting with people from diverse
            backgrounds...
            {/*           
              I'm a web developer and current fellow in the Pursuit software
              engineering fellowship. I'm passionate about problem-solving,
              creativity, and building functional digital experiences through
              collaboration. I believe in using technology to empower
                underrepresented communities, and I'm committed to making a
              positive impact through my skills and creativity. I love
              connecting with people from diverse backgrounds and collaborating
              effectively within teams. Learning from others is always a joy for
              me. Beyond coding, I'm a saxophonist, performing at various venues
              in New York City. I enjoy collaborating with other musicians and
              creating musical experiences. I also enjoy sharing my musical
              knowledge through teaching privately. Explore my website to see my
              latest projects and join me in creating meaningful digital
              solutions. Let's build something amazing together! Joshua Nelson */}
          </p>
          <p className="text-primary font-semibold mt-4">
            Web Developer | Musician | Educator
          </p>
        </div>
        {/* Images to toggle between */}
        <div className="relative max-h-[600px] max-w-[300px]">
          <img
            src="./src/assets/headshot_grass.jpeg"
            alt="Headshot on grass with blurred background"
            className={`h-auto w-auto max-h-[400px] max-w-[300px] cursor-pointer drop-shadow-2xl ${
              !showImg && "hidden"
            }`}
            onClick={toggleImg}
          />
          <img
            src="./src/assets/Press6.jpeg"
            alt="Joshua standing against a black wall holding a saxophone"
            className={`h-auto w-auto max-h-[400px] max-w-[300px] cursor-pointer drop-shadow-2xl ${
              showImg && "hidden"
            }`}
            onClick={toggleImg}
          />
        </div>
      </div>
    );
}