import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span>find me in:</span>
        <a
  href="https://www.linkedin.com/in/divyanshi-pal/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin className="icon linkedin" />
</a>
<a
  href="https://twitter.com/your-twitter-profile"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Twitter"
>
  <FaTwitter className="icon twitter" />
</a>
      </div>
      <div className="footer-right">
      <a className="user"
  href="https://github.com/your-github-profile"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
>
  <span>@Divyanshi2408 </span><FaGithub className="icon github" /> </a>
      </div>
    </footer>
  );
};

export default Footer;
