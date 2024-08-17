import { useSelector } from "react-redux";
import ItemList from "./ItemList";

export default function Cart()
{
    const cartItems = useSelector((store) =>
    {
        return store.cart.items;
    });
    return <div>
        <ItemList items={cartItems}></ItemList>
    </div>;

}