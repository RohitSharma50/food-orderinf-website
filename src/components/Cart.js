import React from 'react'
import cart from "../Images/working-on.jpg";

const Cart = () => {
    return (
        <div className='justify-center align-middle flex mb-20 max-h-full'>
            <img
                className="Cart image w-auto p-20 shadow-black shadow-lg mr-20 h-full mb-30 "
                src={cart}
                alt="Cart workm under process"
                title="Cart image"
            />
        </div>
    )
}
export default Cart;