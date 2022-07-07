import React, {useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import "../project.scss";
import ArrowBack from "../../../assets/Icons/arrowBack.svg";
import ArrowForward from "../../../assets/Icons/arrowForward.svg";

export default function TaxLiab(props) {
  const content = {
    intro:
      "Collecting and paying sales tax is a legal obligation for every business owner but sales tax rules are complex. In the U.S., there are 45 different set of rules and regulations that determine where and when your business needs to collect sales tax.",
    section11:
      "We had early indicators from support that merchants were struggling to understand and manage tax obligations.",
    section12:
      "At the outset of the project we didn't have a clear idea of how we were going to support our merchants. Without pre-existing insights, I partnered with our researcher to understand how merchants dealt with sales tax.",
    section21:
      "Merchants were struggling with the very first step of tax management - Awareness. If they weren't sure where to collect taxes, they weren't able to register for and remit taxes in the right states.",
    section22:
      "To move forward, we needed to tackle the first step of awareness. Our goal was to make it really simple for merchants to understand if, where, and when they need to register and collect sales tax in a state.",
    section31:
      "During the iteration process, I spent time refining the visual language and creating design patterns that were scalable and could be easily extended to other countries and regions.",
    section32:
      "I also led a round of usability testing and made improvements based on feedback before we shipped the final version.",
    final:
      "We launched the tax liability insights dashboard to over a million merchants in the U.S. in 2021. The feature has received an overwhelmingly positive response from UX leadership at Shopify and from our merchants.",
    final2:
      "In the first month of launch, hundreds of thousands of tax registrations were added and we've seen a reduction in the gap of outstanding liabilities. Our product also has a high conversion rate of over 30%.",
  };

  document.title = "Sadhika Billa - Tax Liability";

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="project taxLiab">
      <div className="top">
        <Link to="/work" className="top__link">
          <img src={ArrowBack} className="arrowIcon-left" alt="back arrow"></img>
          Back to projects
        </Link>
        <Link to="/salesTax" className="top__link">
          Next
          <img src={ArrowForward} className="arrowIcon-right" alt="back arrow"></img>
        </Link>
      </div>
      <section className="subsection subsection__intro">
        <div className="content">
          <div className="content__leftIntro">
            <div className="content__yearBox">
              <div className="content__introTitle">Year</div>
              <div className="content__year">2021</div>
            </div>
            <div className="content__resp">
              <div className="content__introTitle">Responsibilities</div>
              <ul className="content__respList">
                <li className="content__respItem">Lead Designer</li>
                <li className="content__respItem">Interaction Design</li>
                <li className="content__respItem">Visual Design</li>
                <li className="content__respItem">Usability Testing</li>
              </ul>
            </div>
          </div>
          <div className="content__right">
            <h1 className="content__mainTitle">
              Decoding sales tax obligations in the United States
            </h1>
            <p className="content__text">{content.intro}</p>
            <p className="content__text">
              Our goal was to decode the complexities of tax laws for our
              merchants and help them collect taxes in all the right states.
              Today, the{" "}
              <span style={{ fontWeight: "bold" }}>
                Tax Liability Insights dashboard is being used by merchants all
                over the U.S. to understand their tax obligations and remain
                compliant with tax laws.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="subsection subsection1">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">The origin story</h2>
          </div>
          <div className="content__right">
            <p className="content__text" style={{ fontWeight: "bold" }}>
              {content.section11}
            </p>
            <p className="content__text">{content.section12}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection2">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Learning from research</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              I worked with the researcher to plan and conduct generative
              research. Research revealed that there are five core steps of
              sales tax management - <span style={{ fontWeight: "bold" }}>Awareness, Registration, Collection,
              Reporting</span> and <span style={{ fontWeight: "bold" }}>Remittance</span> and the friction in our merchants journey
              began at the first step.
            </p>
          </div>
        </div>
      </section>

      {/* INSERT RESEARCH PLAN IMAGE OR JOURNEY MAP */}

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Identifying the opportunity</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section21}</p>
            <p className="content__text" style={{ fontWeight: "bold" }}>{content.section22}</p>
          </div>
        </div>
      </section>

      {/* INSERT STEPS IMAGE */}

      <section className="subsection subsection4">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Content driven design</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              I started the design process by defining the core jobs to be done,
              mapping out the end to end user flow, and identifying content
              needs. <span style={{ fontWeight: "bold" }}>The content needs helped inform the visual hierarchy and
              IA.</span>
            </p>
          </div>
        </div>
      </section>

      {/* INSERT CONTENT IA */}

      <section className="subsection subsection5">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">
              Investing in visual langage and reusable patterns
            </h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section31}</p>
            <p className="content__text">{content.section32}</p>
          </div>
        </div>
      </section>

      {/* INSERT FINAL IMAGES */}

      <section className="subsection subsection6">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">The origin story</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.final}</p>
            <p className="content__text" style={{ fontWeight: "bold" }}>{content.final2}</p>
            <p className="content__text">
              To learn more about this feature, check out Shopify's{" "}
              <a href="https://www.shopify.ca/">blog post</a>.
            </p>
          </div>
        </div>
      </section>
      <div className="bottom">
        <Link to="/work" className="top__link">
          <img src={ArrowBack} className="arrowIcon-left" alt="back arrow"></img>
          Back to projects
        </Link>
        <Link to="/sales" className="top__link">
          Next
          <img src={ArrowForward} className="arrowIcon-right" alt="back arrow"></img>
        </Link>
      </div>
    </div>
  );
}
