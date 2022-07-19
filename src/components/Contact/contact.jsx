import React from "react";
import "./contact.scss";
import PaintBrush from "../../assets/Svgs/paintbrush.svg";
import PaintBrushDM from "../../assets/Svgs/paintbrush-night.svg";

export default function Contact(props) {

  return (
    <>
      {props.theme === "day" || props.theme === ""? (
        <div className="contact">
          <h2 className="contact__title">Let's chat</h2>
          <p className="contact__content">
            Still curious? Reach out to me at{" "}
            <a
              href="mailto:sadhika.billa@gmail.com"
              className="contact__email"
              style={{ color: "#AD3862" }}
            >
              sadhika.billa@gmail.com
            </a>
          </p>
          <img
            src={PaintBrush}
            alt="paint brush and paint"
            className="contact__img"
          ></img>
        </div>
      ) : (
        <div className="contact">
          <h2 className="contact__title">Let's chat</h2>
          <p className="contact__content">
            Still curious? Reach out to me at{" "}
            <a
              href="mailto:sadhika.billa@gmail.com"
              className="contact__email"
              style={{ color: "#F5F488" }}
            >
              sadhika.billa@gmail.com
            </a>
          </p>
          <img
            src={PaintBrushDM}
            alt="paint brush and paint"
            className="contact__img"
          ></img>
        </div>
      )}
    </>
  );
}
