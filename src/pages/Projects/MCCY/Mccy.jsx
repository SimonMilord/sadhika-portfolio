import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../../../assets/Icons/arrowBack.svg";
import ArrowForward from "../../../assets/Icons/arrowForward.svg";

export default function BalancePage(props) {
  const content = {
    intro:
      "The Ministry of Culture, Communication and Youth (MCCY) grants portal - now known as the SG Grants Portal - brings together government grants for the arts, community, heritage, social good, sports and youth into one place.",
    section11:
      "As a Product Designer on the project, I worked alongside a Lead Designer and a Content Designer to design the MVP of the grants portal.",
    section12:
      "I also worked with a UX Researcher to conduct contextual enquiry studies to understand how government officers disburse grants, with the Lead Designer and Product Manager to establish product principles and design guidelines for the product and with a Visual Designer to refine the visual identity.",
    section21: "A significant part of this project was working closely with the core government agencies - the National Environment Agency (NEA), the National Arts Council (NAC), the National Heritage Board (NHB) and the National Youth Council (NYC) to understand how government officials receive applications, review them and issue grants to applicants.",
    section22: "To do this I worked with our researcher to conduct interviews and contextual inquiry studies over two weeks.",
    section31: "",
    section32: "",
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

      {/* INSERT MCCY IMAGE 1 */}

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
            <h2 className="content__title">Learning by observing</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section21}</p>
            <p className="content__text" style={{fontWeight: "600"}}>{content.section22}</p>
          </div>
        </div>
      </section>

      {/* INSERT IMAGE 2 */}

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
            <h2 className="content__title">Introducing the MCCY grants portal</h2>
          </div>
          <div className="content__right">
            <p className="content__text">Based on the research we'd done and insights we'd gathered, I defined the Information Architecture and created some low-fidelity concepts for us to test.</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Illustrations</h2>
          </div>
          <div className="content__right">
            <p className="content__text">I also created illustrations for us to use in the online portal.</p>
          </div>
        </div>
      </section>

      {/* INSERT IMAGE 3 */}

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Video of final product</h2>
          </div>
          <div className="content__right">
            <p className="content__text">INSERT SOME TEXT HERE</p>
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
