import React from "react";
import "./projectDesc.scss";
import { Link } from "react-router-dom";
import Arrow from "../../assets/Icons/arrowWork.svg";

export default function projectDesc(props) {
  const { title, description, link, linkText } = props.project;

  return (
    <>
      {props.theme === "day" || props.theme === "" ? (
        <div className="projectDesc">
          <h2 className="projectDesc__title">{title}</h2>
          <p className="projectDesc__info">{description}</p>
          <div className="projectDesc__bottom">
            <Link
              to={link}
              className="projectDesc__link"
              style={{color: "#AD3862"}}
            >
              {linkText}
              <img src={Arrow} alt="arrow" className="projectDesc__arrow"></img>
            </Link>
            {props.project.otherLink !== null ? (
              <a className="projectDesc__otherLink" href={props.project.otherLink}>{props.project.otherText}</a>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="projectDesc">
          <h2 className="projectDesc__title">{title}</h2>
          <p className="projectDesc__info">{description}</p>
          <div className="projectDesc__bottom">
          <Link
            to={link}
            className="projectDesc__link projectDesc__link--dm"
            style={{ color: "#F5F488" }}
          >
            {linkText}
            <img src={Arrow} alt="arrow" className="projectDesc__arrow projectDesc__arrow--dm"></img>
          </Link>
          {props.project.otherLink !== null ? (
              <a className="projectDesc__otherLink projectDesc__otherLink--dm" href={props.project.otherLink}>{props.project.otherText}</a>
            ) : null}
            </div>
        </div>
      )}
    </>
  );
}
