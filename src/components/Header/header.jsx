import React, { useEffect, useState } from "react";
import "./header.scss";
import Sun from "../../assets/Icons/sun.svg";
import Moon from "../../assets/Icons/moon.svg";
import { Link as ScrollLink } from "react-scroll";
import MenuBtn from "../MenuBtn/menuBtn";

export default function Header(props) {
  let clickedClass = "clicked";
  const body = document.body;
  const dayTheme = "day";
  const nightTheme = "night";

  let [theme, setTheme] = useState("day");

  useEffect(() => {
    if (sessionStorage.getItem("theme")) {
      setTheme(sessionStorage.getItem("theme"));
    }
  }, []);

  if (theme === dayTheme || theme === nightTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(dayTheme);
  }

  const switchTheme = async (e) => {
    if (theme === nightTheme) {
      await setTheme(dayTheme);
      body.classList.replace(nightTheme, dayTheme);
      e.target.classList.remove(clickedClass);
      sessionStorage.setItem("theme", "day");
      props.getTheme("day");
    } else {
      await setTheme(nightTheme);
      body.classList.replace(dayTheme, nightTheme);
      e.target.classList.add(clickedClass);
      sessionStorage.setItem("theme", "night");
      props.getTheme("night");
    }
  };

  return (
    <header className={theme === dayTheme ? "header" : "header-night"}>
      <div className="header__dmIcon">
        {theme === "day" ? (
          <img src={Sun} alt="sun icon" onClick={(e) => switchTheme(e)} />
        ) : (
          <img src={Moon} alt="moon icon" onClick={(e) => switchTheme(e)} />
        )}
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li
            className={
              theme === "night"
                ? "nav__item nav__item--night"
                : "nav__item nav__item--day"
            }
          >
            <div
              className="nav__link"
              onClick={()=> {
                window.scrollTo({top:0, left:0, behavior: 'smooth'});
              }}
            >
              Home
            </div>
          </li>
          <li className="nav__item">
            <ScrollLink
              className={theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"}
              activeClass="active"
              to="myWork"
              smooth={true}
            >
              Work
            </ScrollLink>
          </li>
          <li className="nav__item">
            <ScrollLink
            className={theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"}
            activeClass="active"
            to="about"
            smooth={true}
            >
              About
            </ScrollLink>
          </li>
          <li className="nav__item">
            <a className={theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"} href="/resume.pdf">
              Resumé
            </a>
          </li>
        </ul>
      </nav>
      <div className="menuBtn">
        <MenuBtn handleMouseDown={props.handleMouseDown}/>
      </div>
    </header>
  );
}
