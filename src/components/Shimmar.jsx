import React from "react";
import ShimarCart from "./ShimarCart";


const Shimmar=()=>{
    return<div className=" ml-10 mt-10">
    {/* <div className="h-40 bg-slate-400"></div> */}
   
   <div className=" sm:flex md:flex justify-between ">
   <ShimarCart/>
    <ShimarCart/>
    
    <ShimarCart/>
    
    <ShimarCart/>
   </div>
    
    <div className=" sm:flex md:flex justify-between mt-10">
    <ShimarCart/>
    
    <ShimarCart/>
    
    <ShimarCart/>
    <ShimarCart/> </div>
    
    
    </div>
}
export default Shimmar;