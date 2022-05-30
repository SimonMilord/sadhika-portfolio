import React from 'react';
import "./infoCore.scss";

export default function InfoCore(props) {
const {title, subtitle, desc} = props.content;

  return (
    <div className='infoCore'>
      <h1 className='infoCore__title'>{title}</h1>
      <h2 className='infoCore__subtitle'>{subtitle}</h2>
      <p className='infoCore__content'>{desc}</p>
    </div>
  );
}
