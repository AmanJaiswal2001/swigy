import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu's visibility
  };

  // Selector for cart items
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between px-5 bg-black text-white relative">
      {/* Logo */}
      <div className="logo w-24 m-2">
        <img
          className="img-logo h-24 rounded-3xl"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupt4a_sPWOY7Daoau_h-zPU05azqgCpKNvQ&s"
          alt="Logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex space-x-5 text-xl">
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
            <Link to="/cart">Cart-({cartItems.length} items)</Link>
          </li>
          <li>
            <Link to="/login">
        { <button
            className="rounded-lg outline outline-offset-2 w-16 outline-gray-100  "
            onClick={() => {
              setbtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>}
          </Link>
          </li>
          <h1 className="font-bold">{loggedInUser}</h1>
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 ml-48 w-1/2 bg-black text-white flex flex-col  sm:ml-96 space-x-2  space-y-3 py-5 text-xl z-10">
          <Link to="/"  className= "mx-2" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About Us
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
          </Link>
          <Link to="/cart" onClick={toggleMenu}>
            Cart-({cartItems.length} items)
          </Link>
          <button
            className="rounded-lg  w-16 outline-gray-100 "
            onClick={() => {
              setbtnName(btnName === "Login" ? "Logout" : "Login");
              toggleMenu(); // Close the menu after login/logout
            }}
          >
            {btnName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;


// import React, { useContext, useState } from "react";

// import {Link} from "react-router-dom"
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Header = () => {

//     const [btnName, setbtnName]=useState("LogIn")
  
//   const {loggedInUser}=useContext(UserContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
  
// //selector
// const cartItems=useSelector((store)=>store.cart.items);


//     return (
//         <div className='flex justify-between px-5  bg-black text-white '>
//             <div className='logo w-24 m-2 '>
//                 <img className='img-logo h-24 rounded-3xl'
//                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSupt4a_sPWOY7Daoau_h-zPU05azqgCpKNvQ&s' />
//             </div>
//             <div className='flex items-center '>
//                 <ul className="  flex  space-x-5 text-xl ">
//                 {/* <li>
//                     <Link to="#">status</Link>
//                     </li> */}
//                     <li className="">
//                   <Link to="/">Home</Link>  
//                     </li>
//                     <li className="">
//                     <Link to="/about">About Us</Link>
//                     </li>
//                     <li className="">
//                     <Link to="/contact">Contact Us</Link>
//                     </li>
//                     <li className="px-4 font-bold text-xl ">
//                     <Link to="/cart">Cart-({cartItems.length}items)</Link>
//                     </li>
// <button className="  rounded-lg outline outline-offset-2 w-16 outline-gray-100 " onClick={()=>{
//     btnName==="Login"?
//     setbtnName("Logout"):setbtnName("Login")
// }}>{btnName}</button>
//   <h1 className="font-bold hidden md:block sm:block ">:{loggedInUser}</h1>
  
      
//                 </ul>
// </div>
//                 <div className="md:hidden flex items-center">
//           <button onClick={toggleMenu} className="focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} ></path>
//             </svg>
//           </button>
//         </div>

            
//             {isOpen && (
//         <div className="md:hidden absolute top-16 right-0 bg-black w-full flex flex-col items-center space-y-3 text-xl">
//           <Link to="/" onClick={toggleMenu}>Home</Link>
//           <Link to="/about" onClick={toggleMenu}>About Us</Link>
//           <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
//           <Link to="/cart" onClick={toggleMenu}>
//             Cart-({cartItems.length} items)
//           </Link>
//           <button
//             className="rounded-lg outline outline-offset-2 w-16 outline-gray-100"
//             onClick={() => {
//               btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
//               toggleMenu(); // Close menu after login/logout
//             }}
//           >
//             {btnName}
//           </button>
//         </div>)}
//         </div>
//     )
// }

// export default Header;