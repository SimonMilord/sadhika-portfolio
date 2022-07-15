import React from "react";
import { useInView } from 'react-intersection-observer';
import "./workList.scss";
import ProjectDesc from "../ProjectDesc/projectDesc";
import BalanceImg from "../../assets/Images/balanceImg.svg";

export default function WorkList(props) {
  const { ref: project1Ref, inView: project1IsVis } = useInView({triggerOnce: true});
  const { ref: project2Ref, inView: project2IsVis } = useInView({triggerOnce: true});
  const { ref: project3Ref, inView: project3IsVis } = useInView({triggerOnce: true});


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
      <div className={props.theme === "day" ? "project" : "projectDm"} ref={project1Ref}>
        <img src={BalanceImg} alt="hand with bank card" className={project1IsVis ? "showImg" : "hideImg"}></img>
        <ProjectDesc project={project1} theme={props.theme}/>
      </div>
      <div className={props.theme === "day" ? "project project--reverse" : "projectDm projectDm--reverse"} ref={project2Ref}>
        <img src={BalanceImg} alt="hand with bank card" className={project2IsVis ? "showImg" : "hideImg"}></img>
        <ProjectDesc project={project2} theme={props.theme}/>
      </div>
      <div className={props.theme === "day" ? "project" : "projectDm"} ref={project3Ref}>
        <img src={BalanceImg} alt="hand with bank card" className={project3IsVis ? "showImg" : "hideImg"}></img>
        <ProjectDesc project={project3} theme={props.theme}/>
      </div>
    </div>
  );
}
