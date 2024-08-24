import { useEffect } from "react";

const Contact = () =>
{

    return <div>
        <h1 className="m-4">Contact us page</h1>
        <label className="m-4 my-4">Enter user Name:</label><input className="border border-black rounded-md" placeholder="Enter User"></input><br></br>
        <br></br>
        <label className="m-10">Enter Mail:</label><input className="border border-black rounded-md" placeholder="Enter User"></input>
        <br>
        </br>
        <br></br>
        <button className="px-10 mx-20 border border-black rounded-md">Click</button>
    </div>;
};
export { Contact };