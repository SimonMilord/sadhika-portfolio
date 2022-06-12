import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

export default function BalancePage(props) {
  const content = {
    intro:
      "Shopify Balance is an all-in-one money management account made for business owners.",
    intro2:
      "Dealing with banking and financial services is an essential part of running a business, but today's banking products aren't always designed around the needs of independent business owners. Shopify Balance allows merchants to manage their money from the same place they run their business.",
    section11:
      "Balance consolidates all the money a business owner makes, tracks their payments and allows them to get faster access to their funds. Merchants also have the option to sign up for a physical card for spending online and making in-store purchases and get rewards and cashback for their busines when they spend.",
    section21: "",
    section22: "",
    section31: "",
    section32: "",
    final: "",
    final2: "",
  };

  return (
    <div className="project balance">
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
              <div className="content__year">2022</div>
            </div>
            <div className="content__resp">
              <div className="content__introTitle">Responsibilities</div>
              <ul className="content__respList">
                <li className="content__respItem">Interaction Design</li>
                <li className="content__respItem">Visual Design</li>
                <li className="content__respItem">UX Strategy</li>
              </ul>
            </div>
          </div>
          <div className="content__right">
            <h1 className="content__mainTitle">
              Designing a money management account
            </h1>
            <p className="content__text" style={{ fontWeight: "bold" }}>
              {content.intro}
            </p>
            <p className="content__text">{content.intro2}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection1">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">What does Balance do?</h2>
          </div>
          <div className="content__right">
            <p className="content__text">{content.section11}</p>
          </div>
        </div>
      </section>

      <section className="subsection subsection2">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">Launch and press</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              To learn more about Balance, check out the{" "}
              <a
                href="https://www.shopify.com/balance"
                style={{ fontWeight: "bold" }}
              >
                Balance home page
              </a>
            </p>
            <p className="content__text">
              You can also read about Balance in articles from{" "}
              <a
                href="https://www.shopify.com/balance"
              >
                Forbes
              </a>
              ,{" "}
              <a
                href="https://www.shopify.com/balance"
              >
                TechCrunch
              </a>
              {" "}and{" "}
              <a
                href="https://www.shopify.com/balance"
              >
                BetaKit
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Launch video */}

      <section className="subsection subsection3">
        <div className="content">
          <div className="content__left">
            <h2 className="content__title">More to come</h2>
          </div>
          <div className="content__right">
            <p className="content__text">
              This project is still ongoing and due to my NDA, I will not be
              able to provide more details at this moment.
            </p>
            <p className="content__text">Stay tuned for more soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
