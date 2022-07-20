import React, {useLayoutEffect} from "react";
import { Link } from "react-router-dom";
import "../project.scss";
import ArrowBack from "../../../assets/Icons/arrowBack.svg";
import ArrowForward from "../../../assets/Icons/arrowForward.svg";
import ArrowDown from "../../../assets/Projects/taxLiab/arrowTaxLiab.svg";
import TaxLiab1 from "../../../assets/Projects/taxLiab/1.svg";
import TaxLiab2 from "../../../assets/Projects/taxLiab/2.png";
import TaxLiab3 from "../../../assets/Projects/taxLiab/3.png";
import TaxLiab4 from "../../../assets/Projects/taxLiab/4.png";
import TaxLiab5 from "../../../assets/Projects/taxLiab/5.png";
import TaxLiab6 from "../../../assets/Projects/taxLiab/6.png";
import TaxLiab7 from "../../../assets/Projects/taxLiab/7.png";
import TaxLiab8 from "../../../assets/Projects/taxLiab/8.png";
import TaxLiab9 from "../../../assets/Projects/taxLiab/9.png";
import TaxLiab10 from "../../../assets/Projects/taxLiab/10.png";
import TaxLiab11 from "../../../assets/Projects/taxLiab/11.png";
import TaxLiab12 from "../../../assets/Projects/taxLiab/12.png";



export default function TaxLiab(props) {
  const content = {
    intro:
      "Collecting and paying sales tax is a legal obligation for every business owner but sales tax rules are complex. In the U.S., there are 45 different set of rules and regulations that determine where and when your business needs to collect sales tax.",
    section11:
      "I was the lead Product Designer on this project, responsible for both the interaction and visual design. I also represented UX in the trifecta.",
    section12:
      "In addition, I worked with a Researcher to plan and conduct exploratory research, with a Content Designer on messaging needs and IA and also led and conducted usability tests.",
    section21:
      "We had early indicators from support that merchants were struggling to understand and manage tax obligations.",
    section22:
      "At the outset of the project we didn't have a clear idea of how we were going to support our merchants. Without pre-existing insights, I partnered with our researcher to understand how merchants dealt with sales tax.",
    section31:
      "Merchants were struggling with the very first step of tax management - Awareness. If they weren't sure where to collect taxes, they weren't able to register for and remit taxes in the right states.",
    section32:
      "To move forward, we needed to tackle the first step of awareness. Our goal was to make it really simple for merchants to understand if, where, and when they need to register and collect sales tax in a state.",
    section41:
      "During the iteration process, I spent time refining the visual language and creating design patterns that were scalable and could be easily extended to other countries and regions.",
    section42:
      "I also led a round of usability testing and made improvements based on feedback before we shipped the final version.",
    final:
      "We launched the tax liability insights dashboard to over a million merchants in the U.S. in 2021. The feature has received an overwhelmingly positive response from UX leadership at Shopify and from our merchants.",
    final2:
      "In the first month of launch, over ~150,000 tax registrations were added. We've seen a significant reduction in the gap of outstanding liabilities and our product also has a high double-digit conversion rate.",
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
                <li className="content__respItem">Research</li>
              </ul>
            </div>
          </div>
          <div className="content__right">
            <h1 className="content__mainTitle">
              Decoding sales tax obligations in the United States
            </h1>
            <p className="content__text">{content.intro}</p>
            <p className="content__text">
              Our goal was to help merchants collect taxes in all the right states and our challenge was to decode the complexities of U.S. tax laws to make this possible.
              Today, the{" "}
              <span style={{ fontWeight: "600" }}>
                Tax Liability Insights dashboard is being used by merchants all
                over the U.S. to understand their tax obligations and remain
                compliant with tax laws.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer">
        <img src={TaxLiab1} alt="manage tax liability insights screen" className="imgContainer__img--full"></img>
      </div>

      <section className="subsection subsection1">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">My role</h2>
          </div>
          <div className="content__right">
            <p className="content__text" style={{ fontWeight: "600" }}>
              {content.section11}
            </p>
            <p className="content__text">{content.section12}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection1">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">The origin story</h2>
          </div>
          <div className="content__right">
            <p className="content__text" style={{ fontWeight: "600" }}>
              {content.section21}
            </p>
            <p className="content__text">{content.section22}</p>
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
              I worked with the Researcher to plan and conduct generative
              research. Our research revealed that there are five core steps of
              sales tax management - <span style={{ fontWeight: "600" }}>Awareness, Registration, Collection,
              Reporting</span> and <span style={{ fontWeight: "600" }}>Remittance</span> and the friction in our merchants journey
              began at the first step.
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={TaxLiab2} alt="manage tax liability insights screen" className="imgContainer__img"></img>
        <p className="imgContainer__legend">Snippet of the research plan I created with the researcher</p>
      </div>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Identifying the opportunity</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section31}</p>
            <p className="content__text" style={{ fontWeight: "600" }}>{content.section32}</p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={TaxLiab3} alt="tax journey map" className="imgContainer__img"></img>
        <p className="imgContainer__legend">I created an end-to-end journey map based on research insights. Some information has been obfuscated.</p>
      </div>

      <section className="subsection subsection4">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Content first design</h2>
          </div>
          <div className="content__right">
            <p className="content__text">Given the complexity and granularity of tax rules, our challenge was to make sure we were providing enough context to the merchant so they'd feel confident enough to take action, but at the same time not bomboarding them with detailed tax laws and jargon.</p>
            <p className="content__text">
              I worked closely with the content designer to define the content and messaging needs for our product.
              <span style={{ fontWeight: "600" }}>{" "}The content needs helped inform the visual hierarchy and IA.</span>
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer">
        <img src={TaxLiab4} alt="nexus content needs" className="imgContainer__img"></img>
        <p className="imgContainer__legend">The research we did informed our messaging needs.</p>
        <img src={ArrowDown} alt="arrow pointing down" className="imgContainer__arrow"></img>
      </div>

      <div className="imgContainer">
        <img src={TaxLiab5} alt="messaging needs" className="imgContainer__img"></img>
        <p className="imgContainer__legend">The messaging needs informed the IA.</p>
        <img src={ArrowDown} alt="arrow pointing down" className="imgContainer__arrow"></img>
      </div>

      <div className="imgContainer">
        <img src={TaxLiab6} alt="UI explorations" className="imgContainer__img"></img>
        <p className="imgContainer__legend">The final IA helped guide my UI explorations.</p>
        <img src={ArrowDown} alt="arrow pointing down" className="imgContainer__arrow"></img>
      </div>

      <div className="imgContainer imgContainer--last">
        <img src={TaxLiab7} alt="UI explorations" className="imgContainer__img"></img>
        <p className="imgContainer__legend">I built out the final components based on my UI explorations.</p>
      </div>

      <section className="subsection subsection5">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">
              Investing in visual langage and reusable patterns
            </h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section41}</p>
            <p className="content__text">{content.section42}</p>
          </div>
        </div>
      </section>

      <div className="imgContainer">
        <img src={TaxLiab8} alt="Tax libability insights dashboard" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">Tax libability insights dashboard.</p>
      </div>

      <div className="imgContainer">
        <img src={TaxLiab9} alt="Tax libability insights dashboard" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">State tax sales data.</p>
      </div>

      <div className="imgContainer">
        <img src={TaxLiab10} alt="Tax libability insights dashboard" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">Collect sales tax modal.</p>
      </div>

      <div className="imgContainer imgContainer--last">
        <img src={TaxLiab11} alt="Tax libability insights dashboard" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide-end">Collecting taxes in Texas.</p>
      </div>

      <section className="subsection subsection6">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">It pays to sweat the details</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.final}</p>
            <p className="content__text" style={{ fontWeight: "600" }}>{content.final2}</p>
            <p className="content__text">
              To learn more about this feature, check out Shopify's{" "}
              <a href="https://www.shopify.ca/blog/us-canada-sales-tax-insights">blog post</a>.
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={TaxLiab12} alt="shopify sales tax in the news" className="imgContainer__img"></img>
      </div>

      <div className="bottom">
        <Link to="/work" className="bottom__link">
          <img src={ArrowBack} className="arrowIcon-left" alt="back arrow"></img>
          Back to projects
        </Link>
        <Link to="/salesTax" className="bottom__link">
          Next
          <img src={ArrowForward} className="arrowIcon-right" alt="back arrow"></img>
        </Link>
      </div>
    </div>
  );
}
