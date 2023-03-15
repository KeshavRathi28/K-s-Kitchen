import { useState, useEffect } from 'react';
import { RESTAURANT_MENU_API_URL } from "../config";
import dummyRestaurantMenus from '../mocks/dummyRestaurantMenus';

const useRestaurantInfo = (restaurantId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    async function getRestaurantData() {
        try {
            const data = await fetch(RESTAURANT_MENU_API_URL + restaurantId);
            const json = await data.json();
            setRestaurantData(json?.data);
        } catch (error) {
            setRestaurantData(dummyRestaurantMenus?.filter(menu => String(menu?.data?.id) === String(restaurantId))[0]?.data);
        }
    }
    useEffect(() => {
        getRestaurantData();
    }, []);
    return restaurantData;
}

export default useRestaurantInfo;