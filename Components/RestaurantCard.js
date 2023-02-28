import { IMG_CDN_URL } from '../config';
import { Link } from 'react-router-dom';

const RestaurantCard = (props) => {
    const { id, cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString } = props;

    return (
        <div className="w-64 m-3 p-3 border border-black rounded-2xl shadow-md bg-lime-50 content-between scale-100 hover:scale-105 ease-in duration-100">
            <img className="w-full rounded-xl mb-2" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
            <h2 className="font-bold text-lg hover:font-extrabold mb-2"><Link to={'/restaurant/' + id}>{name}</Link></h2>
            <h3 className="font-medium text-md truncate mb-5">{cuisines.join(', ')}</h3>
            <ul className="flex justify-between pl-0 text-center list-none text-sm">
                <li>{avgRating}</li>
                <li>•</li>
                <li>{slaString}</li>
                <li>•</li>
                <li>{costForTwoString}</li>
            </ul>
        </div>
    );
};

export default RestaurantCard;