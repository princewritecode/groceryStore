import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) =>
{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() =>
    {
        fetchMenu();
    }, []);
    const fetchMenu = async () =>
    {
        const data = await fetch('https://corsproxy-la3g.onrender.com/full/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId=' + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    return resInfo;
};
export default useRestaurantMenu;