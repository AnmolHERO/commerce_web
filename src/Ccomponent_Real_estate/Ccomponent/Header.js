import React from 'react';
// import Navbar from './Navbar';
import header from './images/header.png';
function Header() {
  
    return (
        <div className='mukti'>
             <a href='#'className='header'>
                <img src={header} alt='header'/>
            </a>
            <div className='intro'>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                
                <h3 style={{color:"#236c7e"}}>Looking for a property</h3>
                <h1><span>Buy </span>and <span>Sell </span>Properties </h1>
                <p className="details"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                 galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. 
                </p>
                <a href='#' className='header-btn'>Details</a>
            </div>
        </div>
    );
};

export default Header;