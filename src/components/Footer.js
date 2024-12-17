import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer >
        <FontAwesomeIcon icon={faCopyright} /> 2024 All Rights Reserved <br />{" "}
        Designed by{" "}
        <span className="text-white font-semibold underline">
          {" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/vivek-kumar-upadhyay-20195a230/"
          >
            Vivek Kumar Upadhyay
          </a>{" "}
        </span>{" "}
        <br />
        <div className="footer_links">
          <a
            target="blank"
            href="https://www.instagram.com/attitudboy697_/?hl=en"
          >
            <FontAwesomeIcon icon={faFacebook} beatFade />
          </a>
          <a
            target="blank"
            href="https://www.instagram.com/attitudboy697_/?hl=en"
          >
            <FontAwesomeIcon icon={faInstagram} beatFade />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/vivek-kumar-upadhyay-20195a230/"
          >
            <FontAwesomeIcon icon={faLinkedin} beatFade />
          </a>
          <a href="https://github.com/VIVEKUPADHYAY9" target="blank">
            <FontAwesomeIcon icon={faGithub} beatFade />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
