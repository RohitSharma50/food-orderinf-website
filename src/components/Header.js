
import { useState } from "react";
import logo from "../assets/foodie.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Title = () => {
    return (
        <a href="/">
            <img
                className="logo"
                alt="Logo"
                src={logo} />
        </a>
    );
}


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isOnline = useOnline();
    return (
        <div className="grid grid-cols-4 gap-4">
            <Title />
            <div flex flex-row>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/instamart">Instamart</Link>
                    </li>
                </ul>
                <div className="grid grid-cols-4 gap-4">
                    <ul className="" >
                        <li>
                            {isLoggedIn ? (
                                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                            ) : (
                                <button onClick={() => setIsLoggedIn(true)}>Login</button>)

                            }
                        </li>

                        <li>
                            <h3>{isOnline ? "✅" : "🔴"}</h3>
                        </li>

                    </ul>
                </div>



            </div>
        </div>

    )

};
export default Header;
