import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import Sun from "../../assets/Icons/sun.svg";
import Moon from "../../assets/Icons/moon.svg";

export default function Header(props) {
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
      sessionStorage.setItem("theme", "day");
    } else {
      await setTheme(nightTheme);
      body.classList.replace(dayTheme, nightTheme);
      sessionStorage.setItem("theme", "night");
    }
    props.getTheme(theme);
  };

  return (
    <div className="header">
      <div className="header__logo">Hello</div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link className="nav__link" to="/">
              Intro
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/work">
              Work
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/fun">
              Fun
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__dmIcon">
        {theme === "day" ? (
          <img src={Sun} alt="sun icon" onClick={(e) => switchTheme(e)} />
        ) : (
          <img src={Moon} alt="moon icon" onClick={(e) => switchTheme(e)} />
        )}
      </div>
    </div>
  );
}
