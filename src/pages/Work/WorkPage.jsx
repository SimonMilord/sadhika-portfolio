import React from 'react';
import './WorkPage.scss';
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";

export default function WorkPage(props) {
  const content = {
    title: "Hey there",
    subtitle: "I'm Sadhika, a Senior Product Designer, currently at Shopify.",
    desc: "By day, I work on the Money team, designing the experience for Shopify Balance. I previously led UX for Shopify's Sales Tax and Billing products.",
  };
  return (
    <div className='workPage'>
      <Header activePage="workPage"/>
      <InfoCore content={content}/>
    </div>
  );
}

