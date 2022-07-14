import React from 'react';
import "./projectDesc.scss";
import { Link } from "react-router-dom";

export default function projectDesc(props) {
  const {title, description, link, linkText} = props.project;

  return (
    <div className='projectDesc'>
      <h2 className='projectDesc__title'>{title}</h2>
      <p className='projectDesc__info'>{description}</p>
      <Link to={link} className='projectDesc__link'>{linkText}</Link>
    </div>
  );
}

