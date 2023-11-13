import React from 'react';

function Bproperty(props) {

    return (
        <div className='b-box'>
            <img src={props.image} alt='product' />
            <p href='#'  className='price'>{props.price}</p>
            <p href='#'   className='buy-btn'> Add to price</p>
        </div>
    );
};

export default Bproperty;