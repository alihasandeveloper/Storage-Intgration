import './Cart.css';

const Cart = ({cart, handelRemoveFormCart}) => {
    // console.log(cart);
    return (
        <div className="cart-container">
            <h4>Carts: {cart.length}</h4>

            {
                cart.map((bottle) => (<div key={bottle.id}>
                    <img src={bottle.img}/>
                    <button onClick={() => handelRemoveFormCart(bottle.id)}>Remove</button>
                </div>))
            }

        </div>
    );
};


export default Cart;