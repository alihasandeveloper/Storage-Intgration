import {useEffect, useState} from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import {addToLS, getStoredCart} from "../../utilities/localStorage.js";
import Cart from "../Cart/Cart.jsx";
import PropTypes from "prop-types";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    const handelAddToCart = (bottle) => {
        const newCarts = [...cart, bottle]
        setCart(newCarts);
        // console.log(bottle.id);
        addToLS(bottle.id);
    }

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // Cart Form local storage
    useEffect(() => {
        // console.log('use effect called ' + bottles.length);
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id == id);
                if (bottle) {
                    savedCart.push(bottle);
                }
            }
            setCart(savedCart);
            // console.log( 'Saved Cart', savedCart);
        }
    }, [bottles])

    return (
        <div>
            <h4>Bottles {bottles.length}</h4>
            <Cart cart={cart}/>
            <div className='bottle-container'>
                {
                    bottles.map((bottle) => (<Bottle key={bottle.id} bottle={bottle} cartHandel={handelAddToCart}/>))
                }
            </div>
        </div>
    );
};

Bottles.PropTypes = {
    cart: PropTypes.object.isRequired,


}

export default Bottles;