import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {FaChartLine  } from '@fortawesome/free-solid-svg-icons';
// import { FaDollarSign } from '@fortawesome/free-solid-svg-icons';
// import {  faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
// import { FaHouseUser } from 'react-icons/fa';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { faChartLine} from '@fortawesome/free-solid-svg-icons';

function Howitwork() {

    return (
        <div className='how-it-works'>
            <div className='container'>
            <h2>How it works</h2>
                <div className='flex'>
                    <div>
                    {/* <FontAwesomeIcon icon={faEdit} color="red" /> */}
                    <FontAwesomeIcon icon={ faHouse } color="white" fontSize={31} />

                    <span className='fa-duotone fa-dollar-sign'></span>
                           <h4>Find a Property</h4><br></br>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered  alteration in some form,
                           by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>

                    <div>

                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <FontAwesomeIcon icon={faDollar} color="white" fontSize={31}/>
                           <span className='fas fa-dollar-sign'></span>
                           <h4>Buy a Property</h4><br></br>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                           by injected humour, or randomised words which don't look even slightly believable. </p>
                           </div>
                           

                           <div>

                    <FontAwesomeIcon icon={faChartLine}  color="white" fontSize={31}/>

                           <span className='fas fa-chart-line'></span>
                           <h4>Investing</h4><br></br>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                           by injected humour, or randomised words which don't look even slightly believable.
                           </p></div>

                </div>
            </div>
        </div>
    );
};

export default Howitwork;