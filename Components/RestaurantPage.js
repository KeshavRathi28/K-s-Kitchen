import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import useRestaurantInfo from '../Utils/useRestaurantInfo';
import { addItem } from '../Utils/cartSlice';
import { useDispatch } from 'react-redux';
import RestaurantPageShimmer from './RestaurantPageShimmer';

const RestaurantPage = () => {
    const { restaurantId } = useParams();
    const restaurantData = useRestaurantInfo(restaurantId);

    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return (restaurantData == null) ? <RestaurantPageShimmer /> : (
        <div data-testid="restaurant-menu" id="restaurant-page" className="flex gap-20 m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50">
            <div id="restaurant-details" className="w-2/5 flex flex-col gap-3">
                <h1 className="text-2xl font-bold">{restaurantData?.name}</h1>
                <h2 className="text-lg font-semibold">{restaurantData?.cuisines?.join(', ')}</h2>
                <h3 className="text-md">{restaurantData?.area + ', ' + restaurantData?.city}</h3>
                <img className="rounded-xl" src={IMG_CDN_URL + restaurantData?.cloudinaryImageId} />
                <h4 className="text-md">{restaurantData?.avgRatingString + ' • ' + restaurantData?.totalRatingsString}</h4>
                <h4 className="text-md">{restaurantData?.costForTwoMsg}</h4>
            </div>
            <div id="restaurant-menu" className="w-3/5 flex flex-col gap-1">
                <h2 className="text-lg font-semibold">Menu</h2>
                <ul>
                    {
                        Object.values(restaurantData?.menu?.items).map((item) => (
                            <div key={item?.id} className="flex justify-between gap-x-6">
                                <li>{item?.name}</li>
                                <button data-testid="add-item" className="px-1 border border-black rounded-sm" onClick={() => addFoodItem(item)}>+</button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default RestaurantPage;