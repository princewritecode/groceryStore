import { CDN_URL } from "../../utils/constants";
export default function ItemList({ items })
{
    console.log(items);
    return (
        <div>
            {
                items.map((item) =>
                {
                    return <div className="p-2 m-2 border-b-2 border-black text-left flex justify-between" key={item.card.info.id}>
                        <div className="w-3/12">

                            <div className="absolute">
                                <button className="p-2 rounded-md bg-white shadow-lg  m-auto">Add +</button>
                            </div>
                            <img className="w-full" src={CDN_URL + item.card.info.imageId} ></img>
                        </div>

                        <div className="w-9/12">
                            <div className="py-2">
                                <span> {item.card.info.name}</span>
                                <span> ₹ - {
                                    item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrince / 100
                                }</span>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>;
                })
            }

        </div>
    );
}