import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Header from "../../components/Header/header";
import DayIllo from "../../assets/Images/day-illo.svg";
import NightIllo from "../../assets/Images/night-illo.svg";
import ArrowDay from "../../assets/Icons/arrow-day.svg";
import ArrowNight from "../../assets/Icons/arrow-night.svg";
import { Element, Link as ScrollLink } from "react-scroll";
import WorkList from "../../components/WorkList/workList";
import About from "../About/AboutPage";
import Cloud1 from "../../assets/Svgs/cloud1.svg";
import Cloud2 from "../../assets/Svgs/cloud2.svg";
import Cloud3 from "../../assets/Svgs/cloud3.svg";
import Cloud4 from "../../assets/Svgs/cloud4.svg";
import Cloud5 from "../../assets/Svgs/cloud5.svg";
import Fly1 from "../../assets/Svgs/fly1.svg";
import Fly2 from "../../assets/Svgs/fly2.svg";
import Fly3 from "../../assets/Svgs/fly3.svg";

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
          <Header getTheme={getTheme}/>
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
              <img src={Cloud1} alt="cloud" className="cloud cloud1"></img>
              <img src={Cloud2} alt="cloud" className="cloud cloud2"></img>
              <img src={Cloud3} alt="cloud" className="cloud cloud3"></img>
              <img src={Cloud4} alt="cloud" className="cloud cloud4"></img>
              <img src={Cloud5} alt="cloud" className="cloud cloud5"></img>
            </div>
          </div>
        </div>
      ) : (
        <div className="mainPage-dm">
        <Header getTheme={getTheme}/>
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
            <img src={Fly1} alt="fly" className="fly fly1"></img>
            <img src={Fly2} alt="fly" className="fly fly2"></img>
            <img src={Fly3} alt="fly" className="fly fly3"></img>
          </div>
        </div>
      </div>
      )}
      <Element name="myWork" id="myWork" className={currTheme === "day" ? "myWork section" : "myWork--dm section"}>
        <h2 className="subtitle">Work Samples</h2>
        <WorkList theme={currTheme}/>
      </Element>
      <Element name="about" id="about" className="aboutSection section">
        {/* <div className="about-box"> */}
          <About theme={currTheme}/>
        {/* </div> */}
      </Element>
    </>
  );
}
