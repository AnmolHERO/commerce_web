import React from 'react';
import aboutimage from './images/about.png';
function About() {

    return (
        <div className='about'>
            
                <div className='about-model'>
                    <img src={aboutimage} alt='about image'/>
                </div>
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;

                <div  className='about-text'>
                    <h2>We Are The Best<br/>Real Estate Company </h2>
                    <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</h2>
                   <br/> <button>View More Details</button>
                </div>
        </div>
    );
};

export default About;