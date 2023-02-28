import { useState, useContext } from 'react';
import logo from '../Assets/logo.jpeg';
import cart from '../Assets/cart-icon.png';
import { Link } from 'react-router-dom';
import useOnline from '../Utils/useIsOnline';
import UserContext from '../Utils/UserContext';
import { useSelector } from 'react-redux';

const Title = () => {
    return (
        <Link to='/'><img data-testid="logo" src={logo} alt="K's Kitchen" className="h-20 hover:ring-1 ring-black hover:rounded-md hover:shadow-lg scale-100 hover:scale-105 ease-in duration-100" /></Link>
    );
};

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="sticky top-0 z-10 flex justify-between items-center m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50">
            <Title />
            <div className="nav-items">
                <ul className="list-none flex justify-between items-center">
                    <li className="p-3 w-auto hover:shadow-lg hover:rounded-lg scale-100 hover:scale-110 ease-in duration-100 flex flex-col text-center text-xs"><Link to='/cart'><span data-testid="cart">{cartItems.reduce((sum, obj) => sum + obj.itemQuantity, 0)}</span><img src={cart} alt="Cart" className="h-5" /></Link></li>
                    <li className="p-3 hover:font-semibold hover:overline"><Link to='/'>Home</Link></li>
                    <li className="p-3 hover:font-semibold hover:overline"><Link to='/about'>About</Link></li>
                    <li className="p-3 hover:font-semibold hover:overline"><Link to='/contact'>Contact</Link></li>
                    {
                        (!isLoggedIn) ?
                            <li className="p-3">
                                <button className="button hover:font-semibold hover:overline" onClick={() => setIsLoggedIn(true)}>Login</button>
                            </li> :
                            <li className="p-3">
                                <button className="button hover:font-semibold hover:overline" onClick={() => setIsLoggedIn(false)}>Welcome, {user.name}!</button>
                            </li>
                    }
                    {
                        (!useOnline()) ?
                            <li data-testid="online-status" className="p-3">
                                🔴
                            </li> :
                            <li data-testid="online-status" className="p-3">
                                🟢
                            </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;