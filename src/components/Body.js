import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { list } from "postcss";
// let listOfRestaurant = [
//     {
//         "id": "581971",
//         "name": "Pizza Hut",
//         "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//         "locality": "Airport Road",
//         "areaName": "Kalani Nagar",
//         "costForTwo": "₹350 for two",
//         "avgRating": 4.2,
//     },
//     {
//         "id": "881203",
//         "name": "Chinese Wok",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg",
//         "locality": "Tukoganj Main road",
//         "areaName": "Treasure Island Indore",
//         "costForTwo": "₹250 for two",
//         "avgRating": 3.8,
//     }
// ];
const Body = () =>
{
    const RestaurantCardPromoted = withOpenLabel(RestaurantCard);
    // const { infoWithStyle } = resList.card.card.gridElements;
    // const restaurantss = infoWithStyle.restaurants;
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(() =>
    {
        fetchData();
    }, []);
    const fetchData = async () =>
    {
        try
        {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        } catch (error)
        {
            console.log('Cannot fetch data from API', error);
        }
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
    {
        return (
            <h1>Looks something is wrong</h1>
        );
    }
    else
    {
        return listOfRestaurant.length == 0 ? <Shimmer></Shimmer> : (
            <div className="body">
                <div className="flex">
                    <div className="p-4 m-4">
                        <input className='border border-solid ' onChange={(e) =>
                        {
                            setSearchText(e.target.value);
                        }} type="text" value={searchText} placeholder="Search For Restaurant"></input>
                        <button className="px-4 py-2 rounded-lg bg-green-100 m-4 " onClick={() =>
                        {
                            const filteredRestaurant = listOfRestaurant.filter((res) =>
                            {
                                return res.info.name.toLowerCase().includes(searchText);
                            });
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                        >Search</button>
                    </div>
                    <div className="p-4 m-4 flex items-center">
                        <button className="px-4 rounded-lg py-2 bg-gray-100 " onClick={
                            () =>
                            {
                                const filteredList = listOfRestaurant.filter(
                                    (res) => res.info.avgRating > 4.4
                                );
                                setFilteredRestaurant(filteredList);
                            }
                        }>Top Rated Restaurant</button>

                    </div>

                </div>
                <div className="flex flex-wrap">
                    {
                        filteredRestaurant.map((restaurant) =>
                        {
                            return (
                                <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                    {restaurant.info.isOpen ? <RestaurantCardPromoted resdata={restaurant}></RestaurantCardPromoted> : <RestaurantCard resdata={restaurant}></RestaurantCard>}
                                </Link>);
                        })
                    }
                    {/* {
                    listOfRestaurant.map((res) =>
                    {
                        return <RestaurantCard resdata={res}></RestaurantCard>;
                    })
                } */}
                </div>
            </div>
        );
    }
}
    ;
export { Body };