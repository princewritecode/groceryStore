import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
const RestaurantMenu = () =>
{
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null)
    {
        <Shimmer></Shimmer>;
    };
    try
    {
        const { name, cuisines } = resInfo.cards[2].card.card.info;
        const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        return (<div className="menu">
            <h1>{name}</h1>
            <img></img>
            <p>{cuisines}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards ?
                        itemCards.map((card) =>
                        {
                            return (<li key={card.card.info.id}>{card.card.info.name}</li>);
                        })
                        : resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories[0].itemCards.map(
                            (card) =>
                            {
                                return (<li key={card.card.info.id}>{card.card.info.name}</li>);
                            })
                }
            </ul>
        </div>);
    }
    catch (err)
    {
        console.log(err);
    }
};
export { RestaurantMenu };