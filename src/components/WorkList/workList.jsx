import React from "react";
import { useInView } from "react-intersection-observer";
import "./workList.scss";
import ProjectDesc from "../ProjectDesc/projectDesc";
import BalanceImg from "../../assets/Images/balanceImg.svg";
import Mccy from "../../assets/Images/mccy.svg";
import SalesTax from "../../assets/Images/taxes.svg";
import TaxLiab from "../../assets/Images/liab.svg";
import { Link } from "react-router-dom";

export default function WorkList(props) {
  const { ref: project1Ref, inView: project1IsVis } = useInView({
    triggerOnce: true,
  });
  const { ref: project2Ref, inView: project2IsVis } = useInView({
    triggerOnce: true,
  });
  const { ref: project3Ref, inView: project3IsVis } = useInView({
    triggerOnce: true,
  });
  const { ref: project4Ref, inView: project4IsVis } = useInView({
    triggerOnce: true,
  });

  const project1 = {
    title: "Sales Tax Liability Insights",
    description:
      "Helping merchants understand where, when, and why they're required to collect sales tax in the United States.",
    link: "/taxliab",
    linkText: "See case study",
    // otherLink: "https://www.shopify.com/tax",
    // otherText: "See Shopify Tax"
  };
  const project2 = {
    title: "Rethinking Sales Tax Collection",
    description:
      "Rethinking how the sales tax collection experience in the United States should work.",
    link: "/salesTax",
    linkText: "See case study",
  };
  const project3 = {
    title: "Building Shopify Balance",
    description:
      "Building an all-in-one money management account for independent business owners to manage their finances.",
    link: "/balance",
    linkText: "See overview",
    // otherLink: "https://www.shopify.com/balance",
    // otherText: "See Shopify Balance"
  };
  const project4 = {
    title: "MCCY grants portal",
    description:
      "Digitalising the grant application and administration process for the government of Singapore.",
    link: "/mccy",
    linkText: "See case study"
  };

  return (
    <div className="worklist">
      <div
        className={props.theme === "day" ? "project" : "projectDm"}
        ref={project1Ref}
      >
        <img
          src={TaxLiab}
          loading="lazy"
          alt="texas card for tax liability"
          className={project1IsVis ? "showImg" : "hideImg"}
        ></img>
        <ProjectDesc project={project1} theme={props.theme} />
      </div>
      <div
        className={
          props.theme === "day"
            ? "project project--reverse"
            : "projectDm projectDm--reverse"
        }
        ref={project2Ref}
      >
        <img
          src={SalesTax}
          loading="lazy"
          alt="sales tax collection window"
          className={project2IsVis ? "showImg" : "hideImg"}
        ></img>
        <ProjectDesc project={project2} theme={props.theme} />
      </div>
      <div
        className={props.theme === "day" ? "project" : "projectDm"}
        ref={project3Ref}
      >
        <img
          src={BalanceImg}
          loading="lazy"
          alt="hand with bank card"
          className={project3IsVis ? "showImg" : "hideImg"}
        ></img>
        <ProjectDesc project={project3} theme={props.theme} />
      </div>
      <div
        className={
          props.theme === "day"
            ? "project project--reverse"
            : "projectDm projectDm--reverse"
        }
        ref={project4Ref}
      >
        <img
          src={Mccy}
          loading="lazy"
          alt="web form for MCCY"
          className={project4IsVis ? "showImg" : "hideImg"}
        ></img>
        <ProjectDesc project={project4} theme={props.theme}/>
      </div>
    </div>
  );
}
