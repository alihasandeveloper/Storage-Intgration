import React from 'react';
import './Bottle.css';

const Bottle = ({ bottle, cartHandel }) => {
    const { name, img, price } = bottle;

    return (
        <div>
            <div className='bottle-cart'>
                <h4>{name}</h4>
                <img src={img} alt={name} />
                <p>Price: ${price}</p>
                <button onClick={() => cartHandel(bottle)}>Buy</button>
            </div>

        </div>
    );
};

export default Bottle;