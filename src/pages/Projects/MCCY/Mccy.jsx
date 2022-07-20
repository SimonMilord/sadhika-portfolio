import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../../../assets/Icons/arrowBack.svg";
import ArrowForward from "../../../assets/Icons/arrowForward.svg";
import MCCY1 from "../../../assets/Projects/mccy/1.png";
import MCCY2 from "../../../assets/Projects/mccy/2.png";
import MCCY3 from "../../../assets/Projects/mccy/3.png";
import MCCY4 from "../../../assets/Projects/mccy/4.png";
import MCCY5 from "../../../assets/Projects/mccy/5.png";

export default function BalancePage(props) {
  const content = {
    intro:
      "The Ministry of Culture, Communication and Youth (MCCY) grants portal - now known as the SG Grants Portal - brings together government grants for the arts, community, heritage, social good, sports and youth into one place.",
    section11:
      "As a Product Designer on the project, I worked alongside a Lead Designer and a Content Designer to design the MVP of the grants portal.",
    section12:
      "I also worked with a UX Researcher to conduct contextual enquiry studies to understand how government officers disburse grants, with the Lead Designer and Product Manager to establish product principles and design guidelines for the product and with a Visual Designer to refine the visual identity.",
    section21: "I was brought on to this project after the core problem statement and success metrics had been defined.",
    section31: "A significant part of this project was working closely with the core government agencies to understand how government officials receive applications, review them and issue grants to applicants.",
    section41: "Before exploring design concepts, I mapped out the grant submission and approval workflows to make sure our online portal reflected a workflow that applicants and officials were familiar with.",
    section32: "To do this I worked with our researcher to conduct interviews and contextual inquiry studies over two weeks.",
    final: "",
    final2: "",
  };
  document.title = "Sadhika Billa - Balance";

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="project balance">
      <div className="top">
        <Link to="/work" className="top__link">
          <img
            src={ArrowBack}
            className="arrowIcon-left"
            alt="back arrow"
          ></img>
          Back to projects
        </Link>
        <Link to="/work" className="top__link">
          Next
          <img
            src={ArrowForward}
            className="arrowIcon-right"
            alt="back arrow"
          ></img>
        </Link>
      </div>
      <section className="subsection subsection__intro">
        <div className="content">
          <div className="content__leftIntro">
            <div className="content__yearBox">
              <div className="content__introTitle">Year</div>
              <div className="content__year">2019</div>
            </div>
            <div className="content__resp">
              <div className="content__introTitle">Responsibilities</div>
              <ul className="content__respList">
                <li className="content__respItem">Interaction Design</li>
                <li className="content__respItem">Visual Design</li>
                <li className="content__respItem">Research</li>
              </ul>
            </div>
          </div>
          <div className="content__right">
            <h1 className="content__mainTitle">
              Designing a grants portal for the Government of Singapore
            </h1>
            <p className="content__text">
              {content.intro}
            </p>
            <p className="content__text"><span style={{fontWeight: "600"}}>The goal of the online portal is to streamline the grant application process and make it a lot easier for Singaporeans to apply for government grants and for government agencies to administer these grants to its citizens.</span><br/>This project was built as a part of the Singapore Digital initiative.</p>
          </div>
        </div>
      </section>

      <div className="imgContainer">
        <img src={MCCY1} alt="cute illustrations" className="imgContainer__img--full"></img>
      </div>

      <section className="subsection subsection1">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">My role</h2>
          </div>
          <div className="content__right">
            <p className="content__text" style={{fontWeight: "600"}}>{content.section11}</p>
            <p className="content__text">{content.section12}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection2">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">The end goal</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section21}</p>
            <p className="content__text">Our goal was to create a <span style={{fontWeight: "600"}}>one-stop grants portal for the community so that the citizens of Singapore have a stress-free application process and get quick access to funding.</span></p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={MCCY2} alt="MCCY main page" className="imgContainer__img"></img>
      </div>

      <section className="subsection subsection2">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Learning by observing</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section31}</p>
            <p className="content__text" style={{fontWeight: "600"}}>{content.section32}</p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--spec">
        <img src={MCCY3} alt="pain point board" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">Mapping out insights from contextual inquiry.</p>
      </div>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Consolidating insights</h2>
          </div>
          <div className="content__right">
            <p className="content__text">After conducting interviews, contextual inquiry and analyzing the data I was able to categorize the insights into three main categories - <span style={{fontWeigth: "600"}}>Communication, Workflow management and Security.</span></p>
          </div>
        </div>
      </section>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Understanding the workflow</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section41}</p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={MCCY4} alt="workflow chart" className="imgContainer__img"></img>
      </div>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Introducing the grants portal</h2>
          </div>
          <div className="content__right">
            <p className="content__text">After proposing multiple concepts and going through multiple rounds of user testing, we had the final version of the grants portal.</p>
          </div>
        </div>
      </section>

      <div className="imgContainer__vidBox">
        <iframe
          className="imgContainer__video"
          src="https://www.youtube.com/embed/Z7ODasgR-Bs"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="Balance Launch Video"
        />{" "}
      </div>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Illustrations</h2>
          </div>
          <div className="content__right">
            <p className="content__text">I also worked on some of the illustrations for the portal alsong with the Visual designer.</p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={MCCY5} alt="workflow chart" className="imgContainer__img"></img>
      </div>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Launch and impact</h2>
          </div>
          <div className="content__right">
            <p className="content__text">The MCCY Grants Portal has now been rebranded as the OurSG Grants Portal. <span style={{fontWeight: "600"}}>As of today the portal consolidates grants and is being used by 12 different government agencies in Singapore and offers over 60 different grants.</span> Hundreds-of-thousands of Singaporeans have been able to apply for and obtain grants through the portal.</p>
            <p className="content__text">I was super fortunate to be a part of such an impactful project for the Government of Singapore. You can learn more about the portal <a href="https://oursggrants.gov.sg/">here</a>.</p>
          </div>
        </div>
      </section>

      <div className="bottom">
        <Link to="/work" className="bottom__link">
          <img src={ArrowBack} className="arrowIcon-left" alt="back arrow"></img>
          Back to projects
        </Link>
        <Link to="/work" className="bottom__link">
          Next
          <img src={ArrowForward} className="arrowIcon-right" alt="back arrow"></img>
        </Link>
      </div>
    </div>
  );
}
