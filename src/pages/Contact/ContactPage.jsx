import React from "react";
import "./ContactPage.scss";
import "../../components/InfoCore/infoCore.scss";
import Header from "../../components/Header/header";
import Github from "../../assets/Icons/github.svg";
import Email from "../../assets/Icons/email.svg";
import Linkedin from "../../assets/Icons/linkedin.svg";

export default function ContactPage(props) {
  const content = {
    title: "Contact",
    subtitle: "Like what you see? Say hello",
    desc: "If any of my work looks interesting and you'd like to learn more about who I am and what I do, please reach out to me.",
  };

  document.title = "Sadhika Billa - Contact";

  return (
    <div className="contactPage">
      <Header activePage="contactPage" />
      <div className="contactPage__main">
        <div className="infoCore">
          <h2 className="infoCore__subtitle">{content.subtitle}</h2>
          <p className="infoCore__content contactDesc">{content.desc}</p>
        </div>
        <div className="contactPage__links">
          <a href="mailto:svjbilla@gmail.com" className="contactPage__link">
            <img
              className="contactPage__img"
              src={Email}
              alt="email logo"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/sadhikabilla/"
            className="contactPage__link"
          >
            <img
              className="contactPage__img"
              src={Linkedin}
              alt="linkedin logo"
            ></img>
          </a>
          <a
            href="https://github.com/sadhikabilla"
            className="contactPage__link"
          >
            <img
              className="contactPage__img"
              src={Github}
              alt="github logo"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
