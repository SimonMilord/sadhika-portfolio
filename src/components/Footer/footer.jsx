import React from "react";
import "./footer.scss";
import EmailDay from "../../assets/Icons/email-day.svg";
import GithubDay from "../../assets/Icons/gh-day.svg";
import LinkedinDay from "../../assets/Icons/linkedin-day.svg";
import EmailDM from "../../assets/Icons/email-night.svg";
import GithubDM from "../../assets/Icons/gh-night.svg";
import LinkedinDM from "../../assets/Icons/linkedin-night.svg";

export default function Footer(props) {
  return (
    <>
      {props.theme === "day" ? (
        <div className="footer">
          <div className="footer__wrap">
            <div className="footer__left">
              <p className="footer__copy">
                Made by{" "}
                <a className="footer__ref" href="#">
                  Sadhika Billa
                </a>{" "}
                and{" "}
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
                <img
                  src={LinkedinDay}
                  alt="linkedin"
                  className="footer__img"
                ></img>
              </a>
              <a className="footer__link" href="https://github.com/sadhikabilla">
                <img src={GithubDay} alt="github" className="footer__img"></img>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="footerDM">
          <div className="footerDM__wrap">
            <div className="footerDM__left">
              <p className="footerDM__copy">
                Made by{" "}
                <a className="footerDM__ref" href="#">
                  Sadhika Billa
                </a>{" "}
                and{" "}
                <a className="footerDM__ref" href="https://simonmilord.com/">
                  Simon Milord
                </a>
              </p>
            </div>
            <div className="footerDM__right">
              <a className="footerDM__link" href="mailto:sadhika.billa@gmail.com">
                <img src={EmailDM} alt="email" className="footerDM__img"></img>
              </a>
              <a
                className="footerDM__link"
                href="https://www.linkedin.com/in/sadhikabilla/"
              >
                <img
                  src={LinkedinDM}
                  alt="linkedin"
                  className="footerDM__img"
                ></img>
              </a>
              <a className="footerDM__link" href="https://github.com/sadhikabilla">
                <img src={GithubDM} alt="github" className="footerDM__img"></img>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
