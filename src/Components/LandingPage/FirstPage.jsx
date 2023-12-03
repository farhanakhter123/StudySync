import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  IoBookSharp,
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";
import "./firstPage.css";
import "animate.css";
import { Link } from "react-router-dom";

function FirstPage() {
  // const componentRef = useRef(null);
  // const handleClick=()=>{
  //   componentRef.current.scrollIntoView({ behavior: 'smooth' });
  // }
  return (
    <>
      <div className="mainDiv relative flex flex-col items-center">
        <nav className="first-nav animate__animated animate__fadeInDown">
          <div className="left-nav">
            <span className="uppercase">
              <IoBookSharp className="mr-3" /> Study <span>Sync</span>
            </span>
          </div>
          <div className="right-nav flex items-center">
            <div>
              <button>LogIn</button>
              <span> / </span>
              <button>SignUp</button>
            </div>

            <ul className="ml-10 space-x-3">
              <li>
                <IoLogoTwitter />
              </li>
              <li>
                <IoLogoGithub />
              </li>
              <li>
                <IoLogoLinkedin />
              </li>
              <li>
                <IoLogoFacebook />
              </li>
            </ul>
          </div>
        </nav>
        <nav className="second-nav animate__animated animate__fadeInLeft bg-white bg-opacity-20">
          <ul className="flex space-x-6">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            <li>
              <Link to="">Idea</Link>
            </li>
            <li>
              <Link to="/dashboard/cse/3rd/network">CSE</Link>
            </li>
            <li>
              <Link to="/contact" rel="">
                Contact Us
              </Link>
            </li>
          </ul>
          <span className="tilted-span">
            <span className="skew-x-12">Unleash Your Potential</span>
          </span>
        </nav>
        <div>
          <div className="left-side w-1/2">
            <span className="uppercase font-bold">
              welcome to <span className="text-[#dd1112]">study sync</span>{" "}
            </span>
            <p className="text-4xl font-bold">
              Simplifying the path to success for our junior, one step at a time
              with <span className="text-4xl">Study Sync</span>
            </p>
            <div className="animate__animated  animate__fadeInUp flex ">
              <button className="button-1 transition-all ease-in delay-75">
                View Departments
              </button>
              <Link to="/dashboard/cse/3rd/network">
              <button className="button-2 ml-4 transition-all ease-in delay-75">
                Get Started
                <BiRightArrowAlt className="ml-2" />
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div ref={componentRef} id="contact-page">
      <ContactPage/>
      </div> */}
    </>
  );
}

export default FirstPage;
