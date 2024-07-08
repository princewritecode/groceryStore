import { RestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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
    return listOfRestaurant.length == 0 ? <Shimmer></Shimmer> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input onChange={(e) =>
                    {
                        setSearchText(e.target.value);
                    }} type="text" className="search-box" value={searchText} placeholder="Search For Restaurant"></input>
                    <button onClick={() =>
                    {
                        console.log(listOfRestaurant);
                        const filteredRestaurant = listOfRestaurant.filter((res) =>
                        {
                            return res.info.name.toLowerCase().includes(searchText);
                        });
                        setFilteredRestaurant(filteredRestaurant);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={
                    () =>
                    {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.4
                        );
                        setFilteredRestaurant(filteredList);
                    }
                }>Top Rated Restaurant</button>
            </div>
            <div className="restaurant-cards">
                {
                    filteredRestaurant.map((restaurant) =>
                    {
                        return (
                            <Link target="blank" key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
                                <RestaurantCard resdata={restaurant}></RestaurantCard>
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
};
export { Body };