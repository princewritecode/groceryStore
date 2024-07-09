export default function ItemList({ items })
{
    console.log(items);
    return (
        <div>

            {
                items.map((item) =>
                {
                    return <div className="p-2 m-2 border-b-2 border-black text-left" key={item.card.info.id}>
                        <div className="py-2">
                            <span> {item.card.info.name}</span>
                            <span> ₹ - {item.card.info.price / 100}</span>
                        </div>

                        <span className="text-xs">{item.card.info.description}</span>




                    </div>;
                })
            }

        </div>
    );
}