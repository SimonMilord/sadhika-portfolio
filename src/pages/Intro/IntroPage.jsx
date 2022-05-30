import React from 'react';
import "./IntroPage.scss";
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";

export default function IntroPage(props) {
  const content = {
    title: "Intro",
    subtitle: "I'm a Product Designer with a background in Computer Science and Interactive Media.",
    desc: "I’m a curious learner and adventurer from Singapore, currently living and working in Canada. I have a background in both web and mobile design and I thrive in solving beefy, ambigious problems. I have knack for being able to dive into highly technical and complex domains and find elegant ways to simplify them. I’m also passionate about mentorship and I mentor early-career designers at Brainstation, Technovation Girls and on ADPList. I’m currently designing at Shopify and was previously at Cognizant. ",
  };

  return (
    <div className='introPage'>
      <Header activePage="introPage"/>
      <InfoCore content={content}/>
    </div>
  );
}

