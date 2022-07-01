import React from "react";
import "./IntroPage.scss";
import "../../components/InfoCore/infoCore.scss";
import Header from "../../components/Header/header";

export default function IntroPage(props) {
  const content = {
    title: "Intro",
    subtitle:
      "I'm a Product Designer with a background in Computer Science and Interactive Media.",
  };
  document.title = "Sadhika Billa - Intro";

  return (
    <div className="introPage">
      <div className="introPage__main">
        <div className="infoCore">
          <h2 className="infoCore__subtitle">{content.subtitle}</h2>
          <p className="infoCore__content">
            I'm a curious learner and adventurer from Singapore, currently
            living and working in Canada. I have a background in both web and
            mobile design and I thrive in solving beefy, ambigious problems. I
            have knack for being able to dive into highly technical and complex
            domains and find elegant ways to simplify them. I'm also passionate
            about mentorship and I mentor early-career designers at {" "}
            <a href="https://brainstation.io/">Brainstation</a>, {" "}
            <a href="https://technovationchallenge.org/">Technovation Girls</a>{" "}
            and on <a href="https://adplist.org/">ADPList</a>.
          </p>
          <p className="infoCore__content infoCore__content--current">
            I'm currently designing at {" "}
            <a href="https://www.shopify.ca/">Shopify</a> and was previously at {" "}
            <a href="https://www.cognizant.com/us/en">Cognizant</a>.
          </p>
        </div>
        <div className="introPage__resume">
          {/* insert the resume PDF here and add the file to public files */}
          <a className="introPage__btn" href="*">
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
