import { useState } from "react";
import contact from "../Images/Contact-Us.png"

const Contact = () => {
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
    return (
        <div className="contact-container flex m-24 auto 8 justify-evenly overflow-y-hidden mb-2 mt-2 ">
            <div className="contact-left">
                <img src={contact} alt="" />
            </div>
            <div className="contact-right  justify-center font-extrabold  text-gray-600 text-sm mb-2">
                <h1 className="text-5xl justify-center mx-24">Contact us</h1>

                <form className="grid justify-center m-3 p-4" onSubmit={handleSubmit}>

                    <input className="shadow appearance-none  border-2 border-solid rounded-lg justify-center w-full   m-3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Name" required />
                    <input className="shadow appearance-none border-2 border-solid rounded-lg w-full  m-3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" required />
                    <textarea className="shadow appearance-none border-2 border-solid rounded w-full  m-3 p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Type your Message here..." required></textarea>
                    <button className="m-2 w-20 rounded-lg justify-center p-2 mx-28 bg-blue-600 hover:bg-red-500 text-white" type="submit">Submit</button>
                    {message && <span className="text-lg text-red-500 "> 🙏 Thanks for contacting Us, We will reply ASAP 👨‍🍳.</span>}
                </form>
            </div>
        </div>
    );
};
export default Contact;