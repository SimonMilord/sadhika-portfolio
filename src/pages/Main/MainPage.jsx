import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Header from "../../components/Header/header";
import DayIllo from "../../assets/Images/day-illo.svg";
import NightIllo from "../../assets/Images/night-illo.svg";
import ArrowDay from "../../assets/Icons/arrow-day.svg";
import ArrowNight from "../../assets/Icons/arrow-night.svg";
import { Element, Link as ScrollLink } from "react-scroll";
import WorkList from "../../components/WorkList/workList";

export default function MainPage(props) {
  const [currTheme, setCurrTheme] = useState("");

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
                I'm Sadhika, a Product Designer at Shopify. <span style={{color: "#AD3862"}}>By day</span>, I create
                beautiful and human-centric experiences for Shopify Balance.
              </h1>
              <p className="mainPage__content">
                I previously led UX for Shopify Tax.
              </p>
              <ScrollLink
                activeClass="active"
                to="myWork"
                smooth={true}
                className="mainPage__arrow">
                <img src={ArrowDay} alt="arrow" className="arrow--day"></img>
              </ScrollLink>
            </div>

            <div className="mainPage__right">
              <img
                src={DayIllo}
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
          <div className="mainPage-dm__left">
            <h1 className="mainPage-dm__title">
              I'm Sadhika, a Product Designer at Shopify. <span style={{color: "#F5F488"}}>By night</span>, I enjoy
              spending my time painting, doodling and messing around with code.
            </h1>
            <p className="mainPage-dm__content">
              I also love long walks with my dog.
            </p>
            <ScrollLink
            activeClass="active"
            to="myWork"
            smooth={true}
             className="mainPage-dm__arrow">
              <img src={ArrowNight} alt="arrow" className="arrow--night"></img>
            </ScrollLink>
          </div>

          <div className="mainPage-dm__right">
            <img
              src={NightIllo}
              alt="illustration of me"
              className="mainPage-dm__illustration"
            ></img>
          </div>
        </div>
      </div>
      )}
      {/* <div className="myWork">
        <h2 className="subtitle">
          Take a peek at my <span style={{ color: "#5653D8" }}>work</span>
        </h2>
        <div className="worklist-box">
          <WorkList />
        </div>
      </div> */}
      <Element name="myWork" id="myWork" className="myWork section">
      <h2 className="subtitle">
          Take a peek at my <span style={{ color: "#5653D8" }}>work</span>
        </h2>
        <div className="worklist-box">
          <WorkList />
        </div>
      </Element>
    </>
  );
}
