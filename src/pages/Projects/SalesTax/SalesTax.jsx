import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../../../assets/Icons/arrowBack.svg";
import ArrowForward from "../../../assets/Icons/arrowForward.svg";
import ArrowDown from "../../../assets/Projects/salesTax/arrowDownBlue.svg";
import SalesTax1 from "../../../assets/Projects/salesTax/1.png";
import SalesTax2 from "../../../assets/Projects/salesTax/2.png";
import SalesTax3 from "../../../assets/Projects/salesTax/3.png";
import SalesTax4 from "../../../assets/Projects/salesTax/4.png";
import SalesTax5 from "../../../assets/Projects/salesTax/5.png";
import SalesTax6 from "../../../assets/Projects/salesTax/6.png";
import SalesTax7 from "../../../assets/Projects/salesTax/7.png";
import SalesTax8 from "../../../assets/Projects/salesTax/8.png";

export default function SalesTax(props) {
  const content = {
    intro:
      "The result of the Wayfair vs South Dakota ruling fundamentally changed the way sales tax works in the U.S. I was part of an ambitious project to redesign the Sales Tax Collection experience in Shopify.",
    intro2:
      "The redesign aimed to solve a number of problems and usability issues that had manifested over the years and had been exacerbated by the new Wayfair ruling.",
    section11:
      "I was the lead product designer on this project and led UX from ideation to build.",
    section12:
      "I worked with a Researcher to conduct primary research, worked with tax experts at Shopify to understand sales tax laws, worked with the Product Manager and marketing teams on the go-to-market strategy and with UX leadership to align on the long term goals and UX strategy for this project.",
    section21:
      "Prior to the Wayfair ruling, merchants in the U.S. were only required to collect sales tax in states where they had a physical location. In 2018, the U.S. government implemented a new tax law which made it so that merchants also needed to collect and remit sales tax in all states where they had buyers and were doing business.",
    section22:
      "This meant that most merchants needed to collect and remit sales tax in a lot more states.",
    section31:
      "Before this redesign, the tax collection experience was based on ZIP codes. Merchants had to manually enter in a ZIP code for every region where they needed to collect sales tax. ",
    section41:
      "Since this was a high-priority project on a tight timeline, my immediate gut reaction was to simply make it faster for merchants to enter in these ZIP codes through a CSV.",
    section42:
      "When I started digging deeper into the problem, it was clear that the existing experience needed a complete rework, not just a quick fix.",
    section51:
      "I worked with the PM to extend the timeline so we'd be able to incorporate research, gather data and do a competitive audit.",
    final:
      "We launched the Beta in April 2020 to a limited number of merchants in the U.S.",
    final2:
      "This redesign paved the way for new features and functionality and  has helped influence the future direction of Sales Tax at Shopify.",
  };

  document.title = "Sadhika Billa - Sales Tax";

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="project salesTax">
      <div className="top">
        <Link to="/work" className="top__link">
          <img
            src={ArrowBack}
            className="arrowIcon-left"
            alt="back arrow"
          ></img>
          Back to projects
        </Link>
        <Link to="/balance" className="top__link">
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
              <div className="content__year">2020</div>
            </div>
            <div className="content__resp">
              <div className="content__introTitle">Responsibilities</div>
              <ul className="content__respList">
                <li className="content__respItem">Lead Designer</li>
                <li className="content__respItem">Interaction Design</li>
                <li className="content__respItem">Visual Design</li>
                <li className="content__respItem">Research</li>
              </ul>
            </div>
          </div>
          <div className="content__right">
            <h1 className="content__mainTitle">
              Redesigning the sales tax collection experience
            </h1>
            <p className="content__text">{content.intro}</p>
            <p className="content__text" style={{ fontWeight: "600" }}>
              {content.intro2}
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={SalesTax1} alt="collect sales tax screen" className="imgContainer__img--full"></img>
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
            <h2 className="content__title">
              The ruling that changed sales tax
            </h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section21}</p>
            <p className="content__text" style={{ fontWeight: "600" }}>
              {content.section22}
            </p>
          </div>
        </div>
      </section>

      <section className="subsection subsection2">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">The existing experience</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section31}</p>
            <p className="content__text">
              With the U.S. having over ~41,000 ZIP codes and with the new
              ruling in place,{" "}
              <span style={{ fontWeight: "600" }}>
                merchants were having to manually enter in 1000's of ZIP codes
                which was a slow and frustrating experience and we were getting a large number of support calls related to tax setup.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer">
        <img src={SalesTax2} alt="map how US zip codes" className="imgContainer__img"></img>
        <p className="imgContainer__legend">Map of the US with all it's tax rates and ZIP codes.</p>
        <img src={ArrowDown} alt="arrow pointing down" className="imgContainer__arrow"></img>
      </div>

      <div className="imgContainer imgContainer--last">
        <img src={SalesTax3} alt="table of tax zip codes" className="imgContainer__img"></img>
        <p className="imgContainer__legend">Merchants were forced to translate the map above into a table of ZIP codes.</p>
      </div>

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Testing out a quick fix</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section31}</p>
            <p className="content__text" style={{ fontWeight: "600" }}>
              {content.section32}
            </p>
          </div>
        </div>
      </section>

      <section className="subsection subsection4">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">
              Taking a step back: mental model mismatch
            </h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section41}</p>
            <p className="content__text">
              <span style={{ fontWeight: "600" }}>
                One of the core things that stood out from research was that our
                experience did not align with the real-world mental model for
                sales tax.
              </span>{" "}
              In the real-world, sales tax was based on states, not ZIP codes.
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={SalesTax4} alt="mental model mapping" className="imgContainer__img"></img>
        <p className="imgContainer__legend">I mapped out the mental models to help visualize where the disconnect was coming from.</p>
      </div>

      <section className="subsection subsection5">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Defining principles</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              Our key goal was to ensure that the new design aligned with the
              mental model that merchants had. I also led a workshop to
              establish{" "}
              <span style={{ fontWeight: "600" }}>
                design principles that would inform the redesign and act as a
                compass for the tax product.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer imgContainer--last">
        <img src={SalesTax5} alt="designing principles" className="imgContainer__img"></img>
      </div>

      <section className="subsection subsection6">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Final designs</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              The new design went through many iterations before we had a
              shippable candidate.
            </p>
          </div>
        </div>
      </section>

      <div className="imgContainer">
        <img src={SalesTax6} alt="design" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">Empty state for tax collection.</p>
      </div>

      <div className="imgContainer">
        <img src={SalesTax7} alt="design" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">Adding states where you need to collect sales tax.</p>
      </div>

      <div className="imgContainer imgContainer--spec">
        <img src={SalesTax8} alt="design" className="imgContainer__img"></img>
        <p className="imgContainer__legend imgContainer__legend--wide">State based tax collection.</p>
      </div>

      <section className="subsection subsection7">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Positive results and more to do</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.final}</p>
            <p className="content__text">
              <span style={{ fontWeight: "600" }}>
                In the first month of launching the Beta, support tickets
                related to the sales tax setup fell from 37% of all tax related
                tickets to 21%.
              </span>{" "}
              The updated experience also improved load time of the website.
            </p>
            <p className="content__text">{content.final2}</p>
          </div>
        </div>
      </section>
      <div className="bottom">
        <Link to="/work" className="bottom__link">
          <img src={ArrowBack} className="arrowIcon-left" alt="back arrow"></img>
          Back to projects
        </Link>
        <Link to="/balance" className="bottom__link">
          Next
          <img src={ArrowForward} className="arrowIcon-right" alt="back arrow"></img>
        </Link>
      </div>
    </div>
  );
}
