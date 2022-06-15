import React from "react";
import Card from "../../components/LinkCard/linkCard";
import { Link } from "react-router-dom";
import "./workList.scss";

export default function WorkList(props) {
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

  return (
    <div className="worklist">
      <Link to="/taxliab" className="worklist__link">
        <Card card={card1} />
      </Link>
      <Link to="/salesTax" className="worklist__link">
        <Card card={card2} />
      </Link>
      <Link to="/billing" className="worklist__link">
        <Card card={card3} />
      </Link>
      <Link to="/balance" className="worklist__link">
        <Card card={card4} />
      </Link>
    </div>
  );
}
