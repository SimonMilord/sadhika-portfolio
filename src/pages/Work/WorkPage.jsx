import React from 'react';
import './WorkPage.scss';
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";
import Card from "../../components/LinkCard/linkCard";

export default function WorkPage(props) {

  const card1 = {
    title: "Tax Liability Insights",
    subtitle: "0 -> 1 product"
  }
  const card2 = {
    title: "Sales Tax Collection",
    subtitle: "Redesign"
  }
  const card3 = {
    title: "Shopify Billing",
    subtitle: "Service Design"
  }
  const card4 = {
    title: "Shopify Balance",
    subtitle: "0 -> 1 product"
  }
  const content = {
    title: "Work",
    subtitle: "Take a peek at some of my work.",
    desc: "If you'd like to learn more about my work or see detailed case studies, contact me at sadhika.billa@gmail.com.",
  };
  return (
    <div className='workPage'>
      <Header activePage="workPage"/>
      <InfoCore content={content}/>
      <div className='workPage__cards'>
        <div className='cards-top'>
          <Card card={card1}/>
          <Card card={card2}/>
        </div>
        <div className='cards-bottom'>
          <Card card={card3}/>
          <Card card={card4}/>
        </div>
      </div>
    </div>
  );
}

