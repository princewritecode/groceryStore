import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) =>
{
    return (
        <>
            <div className="m-4 p-4 h-[520px] w-[250px] bg-gray-50 rounded-sm shadow-lg hover:bg-gray-200">
                <img className="rounded-lg" src={CDN_URL + props.resdata.info.cloudinaryImageId}></img>
                <h3 className="font-bold py-4 text-lg">{props.resdata.info.name}</h3>
                <h3>{props.resdata.info.avgRating}</h3>
                <h3>{props.resdata.info.cuisines.join(', ')}</h3>
            </div>
        </>
    );
};
export const withOpenLabel = (RestaurantCard) =>
{
    return (props) =>
    {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</label>
                <RestaurantCard {...props}></RestaurantCard>
            </div>
        );
    };
};
export default RestaurantCard;


