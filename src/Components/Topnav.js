import React, { useState } from 'react';
import '../styles/Topnav.css'; 

const Topnav = () => {
  return (
    //The top Navigation Bar that contains the portal
    <div className='topNav'>
        <div className="container">
          <div className='userlogins'>
              <span href="#" className="logo1">067 108 9950</span>
              <span href="#" className="logo1">santoschristopher199@gmail.com</span>
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

