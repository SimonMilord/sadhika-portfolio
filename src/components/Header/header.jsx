import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Sun from "../../assets/Icons/sun.svg";
import Moon from "../../assets/Icons/moon.svg";
import Home from "../../assets/Icons/home.svg";
import { Link as ScrollLink } from "react-scroll";

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
    <div className="header">
      <div className="header__dmIcon">
        {theme === "day" ? (
          <img src={Sun} alt="sun icon" onClick={(e) => switchTheme(e)} />
        ) : (
          <img src={Moon} alt="moon icon" onClick={(e) => switchTheme(e)} />
        )}
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li className={theme === "night" ? "nav__item nav__item--night" : "nav__item nav__item--day"}>
            <Link className="nav__link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <ScrollLink
              className="nav__link"
              activeClass="active"
              to="myWork"
              smooth={true}
            >
              Work
            </ScrollLink>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/intro">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
