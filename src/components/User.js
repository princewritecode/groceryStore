import React from 'react';

class User extends React.Component
{
    constructor()
    {
        super();
        console.log('prince user constructor');
        this.state = {
            userInfo: {
                name: 'dummy',
                location: 'default'
            }
        };
    }
    async componentDidMount()
    {
        const fetchData = await fetch('https://api.github.com/users/princewritecode');
        const dataRecieved = await fetchData.json();
        this.setState({
            userInfo: dataRecieved
        });
        console.log(dataRecieved);
    }
    componentDidUpdate()
    {
        console.log('component did update is called after rendered bactch');
    }

    render()
    {
        const { name, avatar_url } = this.state.userInfo;
        return (
            <div><h1>{name}</h1>
                <img src={avatar_url}></img>
            </div>
        );
    }
}


export default User;