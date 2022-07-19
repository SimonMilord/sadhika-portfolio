import React, { useState, useEffect } from "react";
import "./MainPage.scss";
import Header from "../../components/Header/header";
// import SlideoutMenu from "../../components/SlideoutMenu/slideoutMenu";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import DayIllo from "../../assets/Images/day-illo.svg";
import NightIllo from "../../assets/Images/night-illo.svg";
import ArrowDay from "../../assets/Icons/arrow-day.svg";
import ArrowNight from "../../assets/Icons/arrow-night.svg";
import { Element, Link as ScrollLink } from "react-scroll";
import WorkList from "../../components/WorkList/workList";
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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("theme")) {
      setCurrTheme(sessionStorage.getItem("theme"));
    }
  }, []);

  const getTheme = (theme) => {
    setCurrTheme(theme);
  };

  const toggleMenu = () => {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleMouseDown = (e) => {
    toggleMenu();
    e.stopPropagation();
  };

  document.title = "Sadhika Billa";

  return (
    <>
      {currTheme === "day" || currTheme === "" ? (
        <div className="mainPage">
          <Header
            getTheme={getTheme}
            handleMouseDown={handleMouseDown}
            menuVis={visible}
          />
          {/* <SlideoutMenu
            theme={currTheme}
            menuVis={visible}
            handleMouseDown={handleMouseDown}
          /> */}
          <div className="mainPage__main">
            <div className="mainPage__top">
              <div className="mainPage__left">
                <h1 className="mainPage__title">
                  I'm Sadhika, a Senior Product Designer at{" "}
                  <a href="https://www.shopify.ca/"><span style={{ color: "#AD3862" }}>Shopify</span></a>. By day,{" "}
                  <br />I create beautiful, human, and user-centric experiences
                  for Shopify Money.
                </h1>
                <p className="mainPage__content">
                  Previously at{" "}
                  <a href="https://www.cognizant.com/"><span style={{ color: "#AD3862" }}>Cognizant</span></a> and{" "}
                  <a href="https://www.accenture.com/"><span style={{ color: "#AD3862" }}>Accenture</span></a>.
                </p>
                <div className="mainPage__bottom">
                  <ScrollLink
                    activeClass="active"
                    to="myWork"
                    smooth={true}
                    className="mainPage__arrow"
                  >
                    <img
                      src={ArrowDay}
                      alt="arrow"
                      className="arrow--day"
                    ></img>
                  </ScrollLink>
                </div>
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
        </div>
      ) : (
        <div className="mainPage-dm">
          <Header
            getTheme={getTheme}
            handleMouseDown={handleMouseDown}
            menuVis={visible}
          />
          {/* <SlideoutMenu
            theme={currTheme}
            menuVis={visible}
            handleMouseDown={handleMouseDown}
          /> */}
          <div className="mainPage-dm__main">
            <div className="mainPage-dm__top">
              <div className="mainPage-dm__left">
                <h1 className="mainPage-dm__title">
                  I'm Sadhika, a Senior Product Designer at{" "}
                  <a href="https://www.shopify.ca/"><span style={{ color: "#F5F488" }}>Shopify</span></a>. By night,<br /> I
                  enjoy spending my time painting, doodling, and messing around
                  with code.
                </h1>
                <p className="mainPage-dm__content">
                  I also love long walks with my dog.
                </p>
                <div className="mainPage-dm__bottom">
                  <ScrollLink
                    activeClass="active"
                    to="myWork"
                    smooth={true}
                    className="mainPage-dm__arrow"
                  >
                    <img
                      src={ArrowNight}
                      alt="arrow"
                      className="arrow--night"
                    ></img>
                  </ScrollLink>
                </div>
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
        </div>
      )}
      <Element
        name="myWork"
        id="myWork"
        className={
          currTheme === "day" ? "myWork section" : "myWork--dm section"
        }
      >
        <WorkList theme={currTheme} />
      </Element>
      <Element
        name="contact"
        id="contact"
        className={
          currTheme === "day"
            ? "contact section"
            : "contact contact--dm section"
        }
      >
        <Contact theme={currTheme} />
      </Element>
      <Footer theme={currTheme} />
    </>
  );
}
