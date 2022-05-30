import React from 'react';
import './FunPage.scss';
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";

export default function FunPage(props) {

  const content = {
    title: "Fun",
    subtitle: "I design and code for fun too.",
    desc: "From enrichment feeders for Orangutans to VR drumsets, I’ve designed and developed some really cool things.",
  };

  return (
    <div className='funPage'>
      <Header activePage="funPage"/>
      <InfoCore content={content}/>
    </div>
  );
}

