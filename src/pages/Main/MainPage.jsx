import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Header from "../../components/Header/header";
import Illustration from "../../assets/Images/final.svg";
import Arrow from "../../assets/Icons/arrow.svg";
import { Element } from "react-scroll";
import WorkList from "../../components/WorkList/workList";

export default function MainPage(props) {
  const [currTheme, setCurrTheme] = useState("");

  const contentDay = {
    subtitle: "I'm Sadhika, a Senior Product Designer, currently at Shopify.",
    desc: "By day, I work on the Money team, designing the experience for Shopify Balance.",
  };

  const contentNight = {
    subtitle: `I'm Sadhika, a Senior Product Designer, currently at Shopify.`,
    desc: "By night, I'm a doodler and a painter. I also spend my time messing around with code (most recently JS animations) and taking lots of pictures of my dog.",
  };

  useEffect(() => {
    if (sessionStorage.getItem("theme")) {
      setCurrTheme(sessionStorage.getItem("theme"));
    }
  }, []);

  const getTheme = (theme) => {
    setCurrTheme(theme);
  };

  document.title = "Sadhika Billa";

  return (
    <>
      {currTheme === "day" || currTheme === "" ? (
        <div className="mainPage">
          <Header getTheme={getTheme} />
          <div className="mainPage__main">
            <div className="mainPage__left">
              <h1 className="mainPage__title">
                Oh hey there, I'm{" "}
                <span style={{ color: "#5653D8" }}>Sadhika</span>
              </h1>
              <p className="mainPage__content">
                I'm a Senior Product Designer, currently @ Shopify.
              </p>
              <p className="mainPage__content">
                <span style={{ fontWeight: "bold" }}>By day</span>, I work on
                the Money team, designing the experience for Shopify Balance. I
                previously led UX for Shopify's Sales Tax product.
              </p>

              <div className="mainPage__arrow">
                <img src={Arrow} alt="arrow" className="arrow"></img>
              </div>
            </div>

            <div className="mainPage__right">
              <img
                src={Illustration}
                alt="illustration of me"
                className="mainPage__illustration"
              ></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainPage-dm">
          <Header getTheme={getTheme} />
          <div className="mainPage-dm__main">
            <div className="mainPage-dm__info">
              <h1 className="mainPage-dm__subtitle">{contentNight.subtitle}</h1>
              <h2 className="mainPage-dm__content">{contentNight.desc}</h2>
            </div>
          </div>
        </div>
      )}
      <div className="myWork">
        <h2 className="subtitle">Take a peek at my <span style={{color: "#5653D8"}}>work</span></h2>
        <div className="worklist-box">
          <WorkList />
        </div>
      </div>
    </>
  );
}
