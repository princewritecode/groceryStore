import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () =>
{
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    if (resInfo === null)
    {
        <Shimmer></Shimmer>;
    };
    try
    {
        const { name, cuisines } = resInfo.cards[2].card.card.info;
        const { itemCards } = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
        //console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
        const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (c) =>
            {
                return c?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            });
        console.log(categories);
        return (<div className="text-center">
            <h1 className="font-bold my-8 text-2xl">{name}</h1>
            <img></img>
            <p className="font-bold text-lg">{cuisines}</p>
            {
                categories.map((category, index) =>
                {
                    return <RestaurantCategory ket={category.card.card.title} showItems={index === showIndex ? true : false} data={category.card.card} setShowIndex={() => setShowIndex(index)}></RestaurantCategory>;
                })
            }
            {/* <h2>Menu</h2>
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
            </ul> */}
        </div>);
    }
    catch (err)
    {
        console.log(err);
    }
};
export { RestaurantMenu };