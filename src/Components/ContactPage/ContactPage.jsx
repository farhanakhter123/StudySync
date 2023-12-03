import React from "react";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import { FaMailBulk, FaPhone } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import InputField from "./InputField";
import "./contactPage.css";
import "animate.css";

import { Link } from "react-router-dom";

function ContactPage() {
  return (
    <>
      <div className="mainContainer">
        <div className="main-Div animate__animated animate__fadeInDown md:flex items-center rounded-lg">
          <nav className="animate__animated animate__fadeInRight animate__delay-2s hidden md:block absolute top-6 right-8 text-2xl font-bold text-[#dd1112]">
            <ul className="flex space-x-5">
              <li className="hover:text-[#2d2d2d]">
                <Link to="/home" rel="">
                  <IoHome />
                </Link>
              </li>
            </ul>
          </nav>
          <span className="bg-contact hidden md:block lg:left-52 opacity-30 text-gray-500">
            Contact
          </span>
          <div className="left space-y-6 md:space-y-8 p-5 md:rounded-tl-lg md:rounded-bl-lg md:py-32 lg:px-20">
            <div className="heading flex flex-col space-y-2">
              <span className="text-3xl font-bold">Just say hi !</span>
              <span className="text-lg">
                Tell us more about it & we will contact you soon :)
              </span>
            </div>
            <div className="form-fields grid grid-cols-2">
              <InputField type="text" label="First name" />
              <InputField type="text" label="Second name" />
              <InputField type="eamil" label="Email" />
              <InputField type="number" label="Phone Number" />
              <div className="textInput relative my-5 col-span-2">
                <textarea
                  className="message-textarea bg-[#2d2d2d] border-b-2"
                  rows="2"
                  required="required"
                ></textarea>
                <label htmlFor="" className="message-label bg-opacity-90">
                  Message
                </label>
              </div>
            </div>
            <button className="submit">Submit</button>
          </div>
          <div className="right text-[#2d2d2d] hidden md:block space-y-5 p-5 lg:pr-20">
            <div className="flex flex-col">
              <h1 className="text-2xl mb-2 font-bold">Contact Information</h1>
              <span>
                <FaMailBulk className="icon-hover inline mr-4" />
                <a href="mailto:matif91201@gmail.com" target="_blank">
                  matif91201@gmail.com
                </a>
              </span>
              <span className="flex items-center">
                <FaPhone className="icon-hover mr-4" /> +91 9934444004
              </span>
              <span>We are available 24 X 7 for helping</span>
            </div>
            <div className="follow">
              <h1 className="text-2xl mb-2 font-bold">Follow us</h1>
              <ul className="flex text-xl space-x-3">
                <li>
                  <BiLogoTwitter />
                </li>
                <li>
                  <BiLogoGithub />
                </li>
                <li>
                  <BiLogoLinkedin />
                </li>
                <li>
                  <BiLogoFacebook />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
