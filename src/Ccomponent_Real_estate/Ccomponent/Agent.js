import React from 'react';
import Agentbox from './Agentbox';

import agentimage1 from './images/s1.png';
import agentimage2 from './images/s2.png';
import agentimage3 from './images/s3.png';
function Agent() {

    return (    
        <div className='agent'>
            <div className='a-heading'>
                 <h1>Agents</h1>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150</p>

                 <div className='b-container'>
                    <Agentbox image={agentimage1} name="Ali"/>
                    <Agentbox image={agentimage2} name="Develops"/>
                    <Agentbox image={agentimage3} name="Websites"/>
                  </div>
            </div> 
        </div>
    );
};

export default Agent;