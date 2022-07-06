import React from "react";
import "./linkCard.scss";
import CardArrow from "../../assets/Icons/cardArrow.svg";

export default function LinkCard(props) {
  const { title, desc } = props.card;

  return (
    <>
      {props.theme === "day" ? (
        <div className="card">
          <div className="card__top">
            <h2 className="card__title">{title}</h2>
          </div>
          <div className="card__mid">
            <p className="card__desc">{desc}</p>
          </div>
          <div className="card__bottom">
            <h3 className="card__caselink">
              See case study &nbsp;
              <img src={CardArrow} className="card__arrow" alt="arrow"></img>
            </h3>
          </div>
        </div>
      ) : (
        <div className="card-dm">
          <div className="card-dm__top">
            <h2 className="card-dm__title">{title}</h2>
          </div>
          <div className="card-dm__mid">
            <p className="card-dm__desc">{desc}</p>
          </div>
          <div className="card-dm__bottom">
            <h3 className="card-dm__caselink">
              See case study &nbsp;
              <img src={CardArrow} className="card-dm__arrow" alt="arrow"></img>
            </h3>
          </div>
        </div>
      )}
    </>
  );
}
