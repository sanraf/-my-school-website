import React, { useState } from 'react';
import '../styles/Topnav.css'; 

const Topnav = () => {
  return (
    //The top Navigation Bar that contains the portal
    <div className='topNav'>
        <div className="container">
          <div className='userlogins'>
              <span href="#" className="logo1">078 3542 653</span>
              <span href="#" className="logo1">email@email.com</span>
          </div>
          <div className='navbar-btns'>
            <a href="#">Portal</a>
            <button href="#">Support us</button>
          </div>
        </div>
    </div>
  );
};
export default Topnav;

