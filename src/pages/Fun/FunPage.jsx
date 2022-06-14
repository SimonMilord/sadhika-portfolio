import React from "react";
import "../../components/InfoCore/infoCore.scss";
import "./FunPage.scss";
import Header from "../../components/Header/header";
import Card from "../../components/LinkCard/linkCard";
import "../../components/InfoCore/infoCore.scss";

export default function FunPage(props) {
  const card1 = {
    title: "Designing for Orangutans",
    subtitle: "I really did this",
  };
  const card2 = {
    title: "Virtually immersive percussion",
    subtitle: "VR Design",
  };
  const card3 = {
    title: "Managing food waste",
    subtitle: "Mobile Design",
  };

  const content = {
    title: "Fun",
    subtitle: "I design and code for fun too.",
    desc: "From enrichment feeders for Orangutans to VR drumsets, I've designed and developed some really cool things.",
  };

  document.title = "Sadhika Billa - Fun";

  return (
    <div className="funPage">
      <Header activePage="funPage" />
      <div className="funPage__main">
        <div className="infoCore">
          {/* <h1 className="infoCore__title">{content.title}</h1> */}
          <h2 className="infoCore__subtitle">{content.subtitle}</h2>
          <p className="infoCore__content">{content.desc}</p>
        </div>
        <div className="funPage__cards">
          <Card card={card1} />
          <Card card={card2} />
          <Card card={card3} />
        </div>
      </div>
    </div>
  );
}
