import React from 'react';
import "./linkCard.scss";

export default function LinkCard(props) {
  const {title, subtitle} = props.card;
  return (
    <div className='card'>
      <div className='card__inner'>
        <h2 className='card__title'>{title}</h2>
        <h3 className='card__subtitle'>{subtitle}</h3>
      </div>
    </div>
  );
}

