import React from "react";
import Card from "../../components/LinkCard/linkCard";
import { Link } from "react-router-dom";
import "./workList.scss";

export default function WorkList(props) {
  const card1 = {
    title: "Decoding sales tax liabilities",
    desc: "Helping merchants understand where, when, and why they should collect sales tax.",
  };
  const card2 = {
    title: "Redesigning sales tax collection",
    desc: "Rethinking how sales tax collection should work.",
  };
  const card3 = {
    title: "Building Shopify Balance",
    desc: "Building financial services for independent businesses.",
  };

  return (
    <div className="worklist">
      <div className="worklist__box">
        <Link to="/taxliab" className="worklist__link">
          <Card card={card1} />
        </Link>
        <Link to="/salesTax" className="worklist__link">
          <Card card={card2} />
        </Link>
        <Link to="/balance" className="worklist__link">
          <Card card={card3} />
        </Link>
      </div>
      <div className="worklist__more">
        <p>I've also contributed to Shopify Markets and Facebook Shops. To learn more about my work, please contact me.</p>
      </div>
    </div>
  );
}
