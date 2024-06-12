import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>
{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>
    {
        fetchMenu();
    }, []);

    const fetchMenu = async () =>
    {
        const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=581971&catalog_qa=undefined&submitAction=ENTER', {
            headers: {
                'x-cors-api-key': 'temp_a45392459d325608235327dd1b7a8d72'
            }
        });
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer></Shimmer>;

    const { name, cuisines } = resInfo.cards[2].card.card.info;
    const { itemCards } = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    return (<div className="menu">
        <h1>{name}</h1>
        <img></img>
        <p>{cuisines}</p>
        <h2>Menu</h2>
        <ul>
            {
                itemCards.map((card) =>
                {
                    return <li key={card.card.info.id}>{card.card.info.name}</li>;
                })
            }
        </ul>

    </div>);
};

export { RestaurantMenu };