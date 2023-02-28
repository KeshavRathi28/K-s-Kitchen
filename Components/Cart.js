import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../Utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50 flex flex-col items-center">
            <h1 data-testid="cartpage-items" className="text-2xl font-bold text-center">Cart - {cartItems.reduce((sum, obj) => sum + obj.itemQuantity, 0)} items</h1>
            {
                (cartItems.length > 0) ?
                    <button className="m-2 p-1 text-red-700 border border-red-900 rounded-md hover:shadow-lg hover:font-semibold hover:text-white hover:bg-red-700" onClick={() => handleClearCart()}>Clear Cart</button> :
                    <button disabled={true} className="m-2 p-1 text-red-400 border border-red-900 rounded-md">Clear Cart</button>
            }
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
    );
};

export default Cart;