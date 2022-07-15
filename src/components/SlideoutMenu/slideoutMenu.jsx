import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import "./slideoutMenu.scss";

export default function SlideoutMenu(props) {
  let visibility = "hide";


  if (props.menuVis) {
    visibility = "show";
  }

  const handleClick = (e) => {
    visibility = "hide";
    props.handleMouseDown(e);
  }

  return (
    <div id={props.theme === "day" ? "slideoutmenu" : "slideoutmenuNight"} className={visibility} onMouseDown={handleClick}>
      <div className='top'>
        <button className="btn" onMouseDown={props.handleMouseDown} aria-label="menu button">x</button>
      </div>
      <ul className='menu'>
        <li className='menu__item'>
          <ScrollLink
              className={props.theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"}
              activeClass="active"
              to="myWork"
              smooth={true}
            >
              Home
          </ScrollLink>
        </li>
        <li className='menu__item'>
          <ScrollLink
              className={props.theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"}
              activeClass="active"
              to="myWork"
              smooth={true}
            >
              Work
          </ScrollLink>
        </li>
        <li className='menu__item'>
          <ScrollLink
              className={props.theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"}
              activeClass="active"
              to="about"
              smooth={true}
            >
              About
          </ScrollLink>
        </li>
        <li className="menu__item">
          <a className={props.theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"} href="/resume.pdf">
            Resumé
          </a>
        </li>
      </ul>
    </div>
  );
}

