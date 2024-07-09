import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>
{
    console.log(props.resdata);
    return (
        <>
            <div className="m-4 p-4 w-[250px] bg-gray-50 rounded-sm shadow-lg hover:bg-gray-200">
                <img className="rounded-lg" src={CDN_URL + props.resdata.info.cloudinaryImageId}></img>
                <h3 className="font-bold py-4 text-lg">{props.resdata.info.name}</h3>
                <h3>{props.resdata.info.avgRating}</h3>
                <h3>{props.resdata.info.cuisines.join(', ')}</h3>
            </div>
        </>
    );
};
export { RestaurantCard };

