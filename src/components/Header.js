import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Header = () =>
{
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
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
                    <li className="px-4">Cart</li>
                    <button onClick={() =>
                    {
                        btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                        console.log(setBtnNameReact);
                    }} className="login">{btnNameReact}</button>
                </ul>
            </div>
        </div>

    );
};
export { Header };