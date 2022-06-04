import React from 'react';
import './FunPage.scss';
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";
import Card from "../../components/LinkCard/linkCard";

export default function FunPage(props) {

  const card1 = {
    title: "Designing for Orangutans",
    subtitle: "I really did this"
  }
  const card2 = {
    title: "Virtually immersive percussion",
    subtitle: "VR Design"
  }
  const card3 = {
    title: "Managing food waste",
    subtitle: "Mobile Design"
  }

  const content = {
    title: "Fun",
    subtitle: "I design and code for fun too.",
    desc: "From enrichment feeders for Orangutans to VR drumsets, I’ve designed and developed some really cool things.",
  };

  return (
    <div className='funPage'>
      <Header activePage="funPage"/>
      <InfoCore content={content}/>
      <div className='funPage__cards'>
        <Card card={card1}/>
        <Card card={card2}/>
        <Card card={card3}/>
      </div>
    </div>
  );
}

