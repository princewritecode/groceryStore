import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () =>
{

    const [btnNameReact, setBtnNameReact] = useState('Login');
    return (
        <>
            <div id="container-nav">
                <img src={LOGO_URL} alt="logo"></img>
                <ul id="nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>Cart</li>
                    <button onClick={() =>
                    {
                        btnNameReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login');
                        console.log(setBtnNameReact);
                    }} className="login">{btnNameReact}</button>
                </ul>
            </div>
        </>
    );
};
export { Header };