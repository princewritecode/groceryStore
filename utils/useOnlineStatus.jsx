import { useEffect, useState } from "react";
export default function useOnlineStatus()
{
    const [onlineStatus, setOnlineStatus] = useState(true);
    // check if online if not than return status
    useEffect(() =>
    {
        window.addEventListener("offline", () =>
        {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () =>
        {
            setOnlineStatus(true);
        });
    }, []);
    //boolean value is returned
    return onlineStatus;
}