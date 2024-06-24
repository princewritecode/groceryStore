import React from "react";
class UserClass extends React.Component
{
    constructor(props)
    {

        super(props);
        console.log(this.props.name, 'child constructor');
        this.state = {
            count: 0, count1: 0, count2: 0
        };
    }

    componentDidMount()
    {
        console.log(this.props.name, 'child component did mount');
    }

    render()
    {
        console.log(this.props.name, 'child render is called');
        const { name, location, contact } = this.props;
        return <div className="user--card">
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
            <h3>Contact:{contact}</h3>
            <h3>{this.state.count}</h3>
            <h3>{this.state.count1}</h3>
            <button onClick={() =>
            {
                this.setState({ count: this.state.count + 1 });
            }}>Increase</button>
            {/* decrease the count by 1 */}
            <button onClick={() =>
            {
                this.setState({ count: this.state.count - 1 });
            }}>Decrease</button>
            {/* multiply by 2 count 1  */}
            <button onClick={() =>
            {
                console.log('hello');
                this.setState({ count1: Math.round(this.state.count1 * 2) });
            }}>Multiply by 2</button>
        </div>;
    };
}
export default UserClass;