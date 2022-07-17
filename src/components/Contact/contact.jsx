import React from 'react';
import "./contact.scss";


export default function Contact(props) {

  return (
    <div className='contact'>
      <h2 className='contact__title'>Let's chat</h2>
      <p className='contact__content'>Still curious? Reach out to me at {" "}
      <a href='mailto:sadhika.billa@gmail.com' className='contact__email' style={{color: "#AD3862"}}>sadhika.billa@gmail.com</a>
      </p>
    </div>
  );
}
