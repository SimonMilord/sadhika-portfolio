import React from "react";
import "./ContactPage.scss";
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";

export default function ContactPage(props) {
  const content = {
    title: "Contact",
    subtitle: "Like what you see? Say hello.",
    desc: "If any of my work looks interesting and you’d like to learn more about what I do and who I am, feel free to contact me. I’m always happy to learn new things and meet new people. ",
  };

  return (
    <div className="contactPage">
      <Header activePage="contactPage"/>
      <InfoCore content={content}/>
    </div>
  );
}
