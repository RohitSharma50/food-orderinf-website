
import { useState } from "react";
import logo from "../assets/foodie.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
    return (
        <a href="/">
            <img
                className="h-28 p-2"
                alt="Logo"
                src={logo} />
        </a>
    );
}


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isOnline = useOnline();
    return (
        <div className="flex justify-between bg-pink-500 shadow-lg ">
            <Title />
            <div >
                <ul className="flex py-2">
                    <li className="px-2">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-2">
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
                            <h3 className="">{isOnline ? "✅" : "🔴"}</h3>
                        </li>

                    </ul>
                </div>



            </div>
        </div>

    )

};
export default Header;
