import { LOGO_URL } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/userContext";
import { useSelector } from "react-redux";
const Header = () =>
{
    const cartItems = useSelector((store) =>
    {
        console.log(store, 'this is store value');
        return store.cart.items;
    });
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg ">
            <div className="flex items-center">
                <img className="w-46" src={LOGO_URL} alt="logo"></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4" id="nav-links">
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"> <Link to='/about'>About</Link></li>
                    <li className="px-4"><Link to='/contact'>Contact</Link></li>
                    <li className="px-4">{onlineStatus ? '🟢' : '🔴'}</li>
                    <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart({cartItems.length})</Link></li>
                    <button onClick={() =>
                    {
                        btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                        console.log(setBtnNameReact);
                    }} className="login">{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    );
};
export { Header };