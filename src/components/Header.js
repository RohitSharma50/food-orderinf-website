
import { useState } from "react";
import logo from "../assets/foodie.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import React from "react";


const Title = () => {
    return (
        <a href="/">
            <img
                className="h-28 p-0"
                alt="Logo"
                src={logo} />
        </a>
    );
}


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const isOnline = useOnline();


    return (
        <div className="flex justify-between bg-pink-400 shadow-lg ">
            <Title />
            <div >
                <ul className="flex py-2 pr-2 text-2xl ">
                    <li className="px-2   hover:text-white hover:text-xl rounded-md">
                        <Link to="/home ">Home</Link>
                    </li>
                    <li className="px-2 hover:text-white hover:text-m rounded-md">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2 hover:text-white hover:text-m rounded-md">
                        <Link to="/About">About</Link>
                    </li>
                    <li className="px-2 hover:text-white hover:text-m rounded-md">
                        <Link to="/cart">Cart</Link>
                    </li>

                </ul>
                <div className="grid  justify-items-start">
                    <ul className="status px-1" >
                        {/* <li>
                            {isLoggedIn ? (
                                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                            ) : (
                                <button onClick={() => setIsLoggedIn(true)}>Login</button>)

                            }
                        </li> */}

                        <li >
                            <h3 >{isOnline ? "✅" : "🔴"} </h3>

                        </li>
                    </ul>
                </div>



            </div>
        </div>

    )

};
export default Header;
