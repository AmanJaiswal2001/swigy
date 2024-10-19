import React, { useContext, useState } from "react";

import {Link} from "react-router-dom"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setbtnName]=useState("LogIn")
  
  const {loggedInUser}=useContext(UserContext);
  
//selector
const cartItems=useSelector((store)=>store.cart.items);


    return (
        <div className='flex justify-between px-5 '>
            <div className='logo w-36 '>
                <img className='img-logo'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupt4a_sPWOY7Daoau_h-zPU05azqgCpKNvQ&s' />
            </div>
            <div className='flex items-center '>
                <ul className="flex  space-x-5 ">
                {/* <li>
                    <Link to="#">status</Link>
                    </li> */}
                    <li>
                  <Link to="/">Home</Link>  
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold text-xl">
                    <Link to="/cart">Cart-({cartItems.length}items)</Link>
                    </li>
<button className="  rounded-lg outline outline-offset-2 w-16 outline-gray-100" onClick={()=>{
    btnName==="Login"?
    setbtnName("Logout"):setbtnName("Login")
}}>{btnName}</button>
  <h1 className="font-bold ">:{loggedInUser}</h1>
                </ul>

            </div>
        </div>
    )
}

export default Header;