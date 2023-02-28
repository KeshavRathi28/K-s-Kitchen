import { IMG_CDN_URL } from '../config';
import { addItem, removeItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ item }) => {
    const { id, name, description, defaultPrice, price, cloudinaryImageId, itemQuantity } = item;
    const dispatch = useDispatch();
    const addCartItem = () => {
        dispatch(addItem(item));
    };
    const removeCartItem = () => {
        dispatch(removeItem(item.id));
    };
    return (
        <div key={id} className="w-1/2 m-3 p-3 border border-black rounded-2xl flex">
            <img alt={name} src={IMG_CDN_URL + cloudinaryImageId} className="w-3/12 rounded-2xl" />
            <div className="mx-2 w-8/12">
                <div className="flex gap-1">
                    {/* <h2 className="font-semibold text-lg">{itemQuantity}&nbsp;x&nbsp;</h2> */}
                    <h2 className="font-bold text-xl">{itemQuantity}&nbsp;x&nbsp;{name}</h2>
                </div>
                <h3>{description}</h3>
            </div>
            <div className="w-1/12 flex flex-col justify-center items-center">
                <button className="w-1/2 border border-black p-1 rounded-lg hover:bg-green-700 hover:text-white hover:shadow-md" onClick={() => addCartItem()}>+</button>
                <h4 className="my-5 font-semibold ">{'₹' + (defaultPrice ? defaultPrice / 100 : price / 100)}</h4>
                <button className="w-1/2 border border-black p-1 rounded-lg hover:bg-red-700 hover:text-white hover:shadow-md" onClick={() => removeCartItem()}>-</button>
            </div>
        </div>
    );
};

export default CartItem;