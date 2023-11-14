import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';
import arrow_icon from '../Assets/arrow.png';
function Offers() {

    return ( 
        <div>
            
        <div className='offers'>
            <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
       
                        <div className='offers-hand-icon'>
                         <button> Check Now
                        <img src={arrow_icon} alt="" />


                        </button>
                             
        </div>

                            </div>     
   
            <div className="offers-right">

            <img src={exclusive_image} height={'100%'} />
            </div>
        </div>  
        </div>
    );              
};

export default Offers;