import React, {useLayoutEffect} from "react";
import {Link} from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";


export default function Billing(props) {
  const content = {
    intro:
      "enter content",
    intro2:
      "",
    section11:
      "",
    section12:
      "",
    section21:
      "",
    section22:
      "",
    section31:
      "",
    section32:
      "",
    final:
      "",
    final2:
      "",
  };

  document.title = "Sadhika Billa - Billing";

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <div className="project billing">
      <div className="top">
        <Link to="/work" className="top__link">
          <CgArrowLongLeft className="arrowIcon" />
          Back
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
                <li className="content__respItem">UX Research</li>
              </ul>
            </div>
          </div>
          <div className="content__right">
            <h1 className="content__mainTitle">
              Billing
            </h1>
            <p className="content__text">{content.intro}</p>
            <p className="content__text">{content.intro2}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection1">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">
              Billing section 1
            </h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section11}</p>
            <p className="content__text">{content.section12}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection2">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Billing section 2</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section21}</p>
            <p className="content__text">{content.section22}</p>
          </div>
        </div>
      </section>

      {/* INSERT IMAGES OF PREVIOUS EXPERIENCE */}

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Billing section 3</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section31}</p>
            <p className="content__text">{content.section32}</p>
          </div>
        </div>
      </section>

      {/* INSERT STEPS IMAGE */}

      <section className="subsection subsection4">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">
              Billing section 4
            </h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section41}</p>
            <p className="content__text">
              One of the core things that stood out from research was that our
              experience did not align with the real-world mental model for
              sales tax. In the real-world, sales tax was based on states, not
              ZIP codes.
            </p>
          </div>
        </div>
      </section>

      {/* INSERT MENTAL MODEL DIAGRAM */}

      <section className="subsection subsection5">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Billing section 5</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              Our key goal was to ensure that the new design aligned with the
              mental model that merchants had. I also led a workshop to
              establish design principles that would inform the redesign and act
              as a compass for the tax product.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* INSERT PRINCIPLES */}

      <section className="subsection subsection6">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Billing section 6</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              The new design went through many iterations before we had a
              shippable candidate.
            </p>
          </div>
        </div>
      </section>

      {/* INSERT FINAL DESIGNS */}

      <section className="subsection subsection7">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Billing section 7</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.final}</p>
            <p className="content__text">
              In the first month of launching the Beta, support tickets related
              to the sales tax setup fell from 37% of all tax related tickets to
              21%. The updated experience also improved load time of the
              website.
            </p>
            <p className="content__text">{content.final2}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
