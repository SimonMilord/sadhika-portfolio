import React from "react";
import { Link } from "react-router-dom";
import "./WorkPage.scss";
import Header from "../../components/Header/header";
import Card from "../../components/LinkCard/linkCard";

export default function WorkPage(props) {
  const card1 = {
    title: "Tax Liability Insights",
    subtitle: "0 to 1 product",
  };
  const card2 = {
    title: "Sales Tax Collection",
    subtitle: "Redesign",
  };
  const card3 = {
    title: "Shopify Billing",
    subtitle: "Service Design",
  };
  const card4 = {
    title: "Shopify Balance",
    subtitle: "0 to 1 product",
  };
  const content = {
    title: "Work",
    subtitle: "Take a peek at some of my work",
  };

  document.title = "Sadhika Billa - Work";

  return (
    <div className="workPage">
      <Header activePage="workPage" />
      <div className="workPage__main">
        <div className="infoCore">
          <h2 className="infoCore__subtitle">{content.subtitle}</h2>
          <p className="infoCore__content">
            If you'd like to learn more about my work or see detailed case
            studies,<br></br> please feel free to contact me.
          </p>
        </div>
        <div className="workPage__cards">
            <Link to="/taxliab" className="workPage__link">
              <Card card={card1} />
            </Link>
            <Link to="/salesTax" className="workPage__link">
              <Card card={card2} />
            </Link>
            <Link to="/billing" className="workPage__link">
              <Card card={card3} />
            </Link>
            <Link to="/balance" className="workPage__link">
              <Card card={card4} />
            </Link>
        </div>
      </div>
    </div>
  );
}
