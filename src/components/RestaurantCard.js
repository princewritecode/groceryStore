import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>
{
    console.log(props.resdata);
    return (
        <>
            <div className="container">
                <img src={CDN_URL + props.resdata.info.cloudinaryImageId}></img>
                <h3>{props.resdata.info.name}</h3>
                <h3>{props.resdata.info.avgRating}</h3>
                <h3>{props.resdata.info.cuisines.join(', ')}</h3>



            </div>
        </>
    );
};
export { RestaurantCard };

