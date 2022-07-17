import React from "react";
import "./footer.scss";
import EmailDay from "../../assets/Icons/email-day.svg";
import GithubDay from "../../assets/Icons/gh-day.svg";
import LinkedinDay from "../../assets/Icons/linkedin-day.svg";

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="footer__left">
        <p className="footer__copy">
          Made by{" "}
          <a className="footer__ref" href="#">
            Sadhika Billa
          </a>
          {" "}and{" "}
          <a className="footer__ref" href="https://simonmilord.com/">
            Simon Milord
          </a>
        </p>
      </div>
      <div className="footer__right">
        <a className="footer__link" href="mailto:sadhika.billa@gmail.com">
          <img src={EmailDay} alt="email" className="footer__img"></img>
        </a>
        <a
          className="footer__link"
          href="https://www.linkedin.com/in/sadhikabilla/"
        >
          <img src={LinkedinDay} alt="linkedin" className="footer__img"></img>
        </a>
        <a className="footer__link" href="https://github.com/sadhikabilla">
          <img src={GithubDay} alt="github" className="footer__img"></img>
        </a>
      </div>
    </div>
  );
}
