import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_Api_URL } from "../utils/constants";
const RestaurantMenu = () =>
{
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    // console.log(resId);
    useEffect(() =>
    {
        fetchMenu();
    }, []);
    const fetchMenu = async () =>
    {
        const data = await fetch(Menu_Api_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
        console.log(json.data);
    };
    console.log('test', resInfo);
    if (resInfo === null)
    {
        <Shimmer></Shimmer>;
    };
    const { name } = resInfo.cards[2].card.card.info;
    console.log(name);
    const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return (<div className="menu">
        <h1>{name}</h1>s
        <img></img>
        <p>{cuisines}</p>
        <h2>Menu</h2>
        <ul>
            {
                itemCards.map((card) =>
                {
                    return (<li key={card.card.info.id}>{card.card.info.name}</li>);
                })
            }
        </ul>

    </div>);
};
export { RestaurantMenu };