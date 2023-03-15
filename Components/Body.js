import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState } from 'react';
import useRestaurants from '../Utils/useRestaurants';

const Body = () => {
    const [searchText, setSearchText] = useState('');
    const [allRestaurants, filteredRestaurants, setFilteredRestaurants] = useRestaurants();
    return (
        <div className="px-2">
            <div className="flex flex-wrap mt-3 mr-3 mb-0 ml-3 pt-3 pr-3 pb-3 pl-0 space-x-5">
                <input data-testid="search-input" type="text" placeholder="Search by Restaurant Name" value={searchText} className="border border-black rounded-xl h-8 w-64 py-0 px-3 shadow-md hover:ring-2 ring-green-600 focus:outline-green-900" onChange={(e) => {
                    setSearchText(e?.target?.value);
                }} />
                <button data-testid="search-btn" className="border border-black rounded-xl w-24 shadow-md bg-lime-200 hover:font-semibold" onClick={() => {
                    setFilteredRestaurants(allRestaurants.filter(rest => rest?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())));
                }
                }>Search</button>
            </div>
            {
                (allRestaurants.length === 0) ? <Shimmer /> :
                    (filteredRestaurants.length === 0) ? <h2>No matching restaurants found...</h2> :
                        <div data-testid="restaurant-list" className="z-0 flex flex-wrap justify-between">
                            {
                                filteredRestaurants.map((restaurant) => {
                                    return <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />;
                                })
                            }
                        </div>
            }
        </div>
    );
};

export default Body;