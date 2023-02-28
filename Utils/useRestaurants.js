import { useState, useEffect } from 'react';
import { RESTAURANTS_API_URL } from '../config';

const useRestaurants = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    async function getRestaurants() {
        const data = await fetch(RESTAURANTS_API_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(() => {
        getRestaurants();
    }, []);
    return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurants;