import React from 'react';
import './WorkPage.scss';
import Header from "../../components/Header/header";
import InfoCore from "../../components/InfoCore/infoCore";

export default function WorkPage(props) {
  const content = {
    title: "Work",
    subtitle: "Take a peek at some of my work.",
    desc: "If you'd like to learn more about my work or see detailed case studies, contact me at sadhika.billa@gmail.com.",
  };
  return (
    <div className='workPage'>
      <Header activePage="workPage"/>
      <InfoCore content={content}/>
    </div>
  );
}

