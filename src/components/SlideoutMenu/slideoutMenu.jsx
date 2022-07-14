import React from 'react';
import { Link as ScrollLink } from "react-scroll";
import "./slideoutMenu.scss";

export default function SlideoutMenu(props) {
  let visibility = "hide";

  if (props.menuVis) {
    visibility = "show";
  }
  return (
    <div className={visibility} id="slideoutmenu">
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
        <li className="nav__item">
          <a className={props.theme === "night" ? "nav__link nav__link--night" : "nav__link nav__link--day"} href="/resume.pdf">
            Resumé
          </a>
        </li>
      </ul>
    </div>
  );
}

