import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component
{
    constructor()
    {
        super();
        console.log('parent constructor is called');
    }
    componentDidMount()
    {
        console.log('parent component id mount is called');
    }

    render()
    {
        console.log("parent render method is called");
        return <>
            <User></User>
        </>;
    }
}
export { About };