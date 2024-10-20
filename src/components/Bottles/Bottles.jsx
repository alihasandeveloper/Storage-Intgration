import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    const cartHandel =  (bottle) => {
        const newCarts = [...cart, bottle]
        setCart(newCarts);
        // console.log(bottle);
    }

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h4>Bottles {bottles.length}</h4>
            <h4>Carts: {cart.length}</h4>
            <div className='bottle-container'>
                {
                    bottles.map((bottle) => (<Bottle key={bottle.id} bottle={bottle} cartHandel={cartHandel} />))
                }
            </div>
        </div>
    );
};

export default Bottles;