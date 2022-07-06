import React from "react";
import "./AboutPage.scss";
// import "../../components/InfoCore/infoCore.scss";
// import Header from "../../components/Header/header";
import ProfileDay from "../../assets/Images/profileDay.png";
import ProfileNight from "../../assets/Images/profileNight.png";

export default function IntroPage(props) {
  const theme = props.theme;

  return (
    <div className="about">
      <div className="about__profile">
        <div className="about__box">
          <div
            className={
              theme === "day" ? "about__box--inner" : "about__box--innerDM"
            }
          >
            {theme === "day" ? (
              <img
                src={ProfileDay}
                alt="profile pic"
                className="about__picture"
              ></img>
            ) : (
              <img
                src={ProfileNight}
                alt="profile pic"
                className="about__picture"
              ></img>
            )}
          </div>
        </div>
      </div>
      <div className="about__content">
        <p className="about__text about__text--1">
          I'm a Product Designer with a background in Computer Science and
          Interactive Media.
        </p>
        <p className="about__text about__text--2">
          I currently work on the Financial Solutions team at{" "}
          <a
            href="https://www.shopify.ca/"
            className={theme === "day" ? "day" : "night"}
          >
            Shopify
          </a>
          , designing the experience for{" "}
          <a
            href="https://www.shopify.com/balance"
            className={theme === "day" ? "day" : "night"}
          >
            Shopify Balance
          </a>
          . I previously led UX for Shopify's Tax and Billing products.
        </p>
        <p className="about__text about__text--3">
          I have experience in both web and mobile design and I thrive in
          solving beefy, ambiguous, problems.
        </p>
        <p className="about__text about__text--4">
          I've lived and worked in 4 different countries and my ability to
          quickly adapt to new life challenges comes from that. Owing to my
          diverse upbringing, I love experiencing new cultures, and I try to
          bring my knowledge of different cultures into the designs I create.
        </p>
        <p className="about__text about__text--5">
          I'm also passionate about mentorship and mentor early career designers
          at{" "}
          <a
            href="https://technovationchallenge.org/"
            className={theme === "day" ? "day" : "night"}
          >
            Technovation Girls
          </a>
          ,{" "}
          <a
            href="https://brainstation.io/"
            className={theme === "day" ? "day" : "night"}
          >
            Brainstation
          </a>{" "}
          and{" "}
          <a
            href="https://adplist.org/"
            className={theme === "day" ? "day" : "night"}
          >
            ADPList
          </a>
          .
        </p>
      </div>
    </div>
  );
}
