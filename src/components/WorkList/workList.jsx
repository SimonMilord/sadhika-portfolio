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

  const theme = props.theme;

  return (
    <div className="worklist">
      <div className="worklist__box">
        <Link to="/taxliab" className="worklist__link">
          <Card card={card1} theme={theme}/>
        </Link>
        <Link to="/salesTax" className="worklist__link">
          <Card card={card2} theme={theme}/>
        </Link>
        <Link to="/balance" className="worklist__link">
          <Card card={card3} theme={theme} />
        </Link>
      </div>
      <div className="worklist__more">
        <p className="worklist__text">
          I've also contributed to{" "}
          <a className={theme === "day" ? "worklist__ref" : "worklist__ref--dm"} href="https://www.shopify.ca/free-trial?term=shopify%20markets&adid=565729915155&campaignid=15436644442&branded_enterprise=1&BOID=brand&gclid=Cj0KCQjwn4qWBhCvARIsAFNAMijH0cUHahH1DoBejn8MK41Je5AVv7kZiOpC0AShBnXJ_EKQ73epfJ4aAoNAEALw_wcB&cmadid=516586854;cmadvertiserid=10730501;cmcampaignid=26990768;cmplacementid=324494812;cmcreativeid=163722649;cmsiteid=5500011">
            Shopify Markets
          </a>{" "}
          and <a className={theme === "day" ? "worklist__ref" : "worklist__ref--dm"} href="https://help.shopify.com/en/manual/online-sales-channels/facebook">Facebook Shops</a>. To learn more about my work, please contact me.
        </p>
      </div>
    </div>
  );
}
