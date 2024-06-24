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
        return <div>
            <User></User>
            <UserClass name={'2prince(class component)'} location={"indore"} contact={"princepatel.dev@gmail.com"}></UserClass>

            <UserClass name={'Elon(class component)'} location={"us"} contact={"princepatel.dev@gmail.com"}></UserClass>
        </div>;
    }
}
export { About };