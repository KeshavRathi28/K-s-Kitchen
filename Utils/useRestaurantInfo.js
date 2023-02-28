import { useState, useEffect } from 'react';
import { RESTAURANT_MENU_API_URL } from "../config";

const useRestaurantInfo = (restaurantId) => {
    const [restaurantData, setRestaurantData] = useState(null);
    async function getRestaurantData() {
        const data = await fetch(RESTAURANT_MENU_API_URL + restaurantId);
        const json = await data.json();
        setRestaurantData(json?.data);
    }
    useEffect(() => {
        getRestaurantData();
    }, []);
    return restaurantData;
}

export default useRestaurantInfo;