import { useEffect } from "react";

const Contact = () =>
{
    useEffect(() =>
    {
        console.log('useeffect is called');
    }, []);
    console.log('function called');
    return <div>
        <h1>Contact us page</h1>
    </div>;
};
export { Contact };