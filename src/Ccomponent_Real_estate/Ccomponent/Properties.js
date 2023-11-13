import React from 'react';


import { Button,Card } from 'react-bootstrap';

// import { Button,Card } from 'react-bootstrap';
import Bproperty from './Bproperty';
import pimage1 from './images/p1.png'
import pimage2 from './images/p2.png'
import pimage3 from './images/p3.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Properties() {

    return (
        <div className='product'>
            <div className='p-heading'>
  
            <FontAwesomeIcon icon="coffee" />

  

                <h3>Properties</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
            </div>
            <div className='product-container'>


            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pimage2} />
      <Card.Body>
        <Card.Title> Rs 240,000</Card.Title>
        <br></br>
        <a href='#' className='agent-btn'>Buy Now</a>

        {/* <Button className='Properties' variant="primary">Buy Now</Button><br></br> */}
      </Card.Body>
      {/* style={{background:'#236c7e'} */}
    </Card>

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pimage1} />
      <Card.Body><br></br>
        <Card.Title>540,000</Card.Title>
        <br></br>

        <a href='#' className='agent-btn'>Buy Now</a>
       
        {/* <Button className='Properties' variant="primary">Buy Now</Button> */}
      </Card.Body>
    </Card>



    &nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pimage3} />
      <Card.Body>
        <Card.Title>Rs 940,000</Card.Title><br></br>
        
          
	                        {/* background-color: #064757; */}
        <a href='#' className='agent-btn'>Buy Now</a>

        {/* <Button className='Properties' variant="primary" >Buy Now</Button> */}
      </Card.Body>
    </Card>
             {/* <div style={{margin:"60px"}}>
            <Bproperty image={pimage1} name="AL-Musalla" price="Rs 240,000"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='t-btn'>Buy now</button>

              </div>
              <div styyle={{margin:"60px"}}>
              <Bproperty image={pimage2} name="AL-Hafz" price=" Rs 540,000"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='t-btn'>Buy now</button>

              </div>
              <div style={{margin:"60px"}}>
              <Bproperty image={pimage3} name="AL-Bahara" price=" Rs 940,000"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <button className='t-btn'>Buy now</button> 
              </div> */}
            



            

            </div>
        </div>
    );
};

export default Properties;