import './Cart.css';

const Cart = ({cart}) => {
    // console.log(cart);
    return (
        <div className="cart-container">
            <h4>Carts: {cart.length}</h4>

            {
                cart.map((cart) => (<img key={cart.id} src={cart.img}/>))
            }

        </div>
    );
};


export default Cart;