import React from "react";
import "./projectDesc.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/Icons/arrowWork.svg";

export default function projectDesc(props) {
  const { title, description, link, linkText } = props.project;
  // const {theme} = props.theme;

  return (
    <>
      {props.theme === "day" ? (
        <div className="projectDesc">
          <h2 className="projectDesc__title">{title}</h2>
          <p className="projectDesc__info">{description}</p>
          <Link
            to={link}
            className="projectDesc__link"
            style={{ color: "#AD3862" }}
          >
            {linkText}
            <img src={Arrow} alt="arrow" className="projectDesc__arrow"></img>
          </Link>
        </div>
      ) : (
        <div className="projectDesc">
          <h2 className="projectDesc__title">{title}</h2>
          <p className="projectDesc__info">{description}</p>
          <Link
            to={link}
            className="projectDesc__link"
            style={{ color: "#F5F488" }}
          >
            {linkText}
            <img src={Arrow} alt="arrow" className="projectDesc__arrow projectDesc__arrow--dm"></img>
          </Link>
        </div>
      )}
    </>
  );
}
