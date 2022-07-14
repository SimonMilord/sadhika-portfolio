import React from "react";
import { Link } from "react-router-dom";
import "./workList.scss";
import ProjectDesc from "../ProjectDesc/projectDesc";
import BalanceImg from "../../assets/Images/balanceImg.svg";

export default function WorkList(props) {
  const theme = props.theme;

  const project1 = {
    title: "Building Shopify Balance",
    description: "Building an all-in-one money management account for independent business owners to manage their finances.",
    link: "/balance",
    linkText: "See overview"
  }
  const project2 = {
    title: "Sales Tax Liability Insights",
    description: "Helping merchants understand where, when, and why they're required to collect sales tax in the United States.",
    link: "/taxliab",
    linkText: "See case study"
  }
  const project3 = {
    title: "Rethinking Sales Tax Collection",
    description: "Redesigning the sales tax collection experience in the United States.",
    link: "/salesTax",
    linkText: "See case study"
  }

  return (
    <div className="worklist">
      <div className="project">
        <img src={BalanceImg} alt="hand with bank card"></img>
        <ProjectDesc project={project1}/>
      </div>
      <div className="project project--reverse">
        <img src={BalanceImg} alt="hand with bank card"></img>
        <ProjectDesc project={project2}/>
      </div>
      <div className="project">
        <img src={BalanceImg} alt="hand with bank card"></img>
        <ProjectDesc project={project3}/>
      </div>
    </div>
  );
}
