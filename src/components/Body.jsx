import React, { useEffect } from "react";

import RestarantCard from "./RestarantCard";
import Shimmar from "./Shimmar";
// import resList from "./ResList";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {withPromtedLabel} from "./RestarantCard";
import UserContext from "../utils/UserContext";
const Body = () => {

    const[listOfRestaurants,setListOfRestrant]=useState([]);
   const[search,setsearch]=useState("")
   const[filter,setfilter]=useState([])
   
   const RestarantCardPromoted=withPromtedLabel(RestarantCard);

// console.log(RestarantCardPromoted);
 const {loggedInUser,setuserinfo}=useContext(UserContext);
   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData= async()=>{
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json=await data.json();
console.log(json);

setListOfRestrant(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
console.log(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)
setfilter(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    
}

//use custom hooks
const OnlineStatus=useOnlineStatus();
if(OnlineStatus==false)
    return<h1>Please check a Internet connection</h1>
   //conditional render//

   if(!listOfRestaurants || listOfRestaurants.length === 0){
    return <Shimmar/>
       }
       
    return (
        <div>
            <div className='  sm:flex md:flex justify-between p-4'>
            <div className="search">
                <input className=" sm:w-96 md:w-96 h-8 w-80 outline  bg-yellow-400 outline-yellow-200 rounded-ss-md"
                type="text"
                placeholder="Search for dishes"
                value={search}
                onChange={(e)=>{
setsearch(e.target.value)
                }}>

                </input>
                <button className="outline mt-4 md:mt-0 sm:mt-0 outline-yellow-200 w-24 h-8 bg-yellow-400  rounded-ss-md"
                onClick={()=>{
                    const filterRestarants=listOfRestaurants.filter((res) =>
res.info.name.toLowerCase().includes(search.toLowerCase()));

setfilter(filterRestarants)
                    
                }}
                
                
                
                >Search</button>
            </div>
            <button className=" outline outline-yellow-200   bg-yellow-400 w-48 h-8 rounded-lg mt-5 md:mt-0 sm:mt-0" 
            onClick={()=>{
                const filteredList =listOfRestaurants.filter(
                    (res)=>res.info.avgRating>4.2
                    );
                //    console.log(filteredList);
                    setfilter(filteredList);

            }}>
Top Rated Restarant
            </button>
            <input type="text" className="outline w-96 h-8 rounded-lg p-1 outline-yellow-200   bg-yellow-400  hidden sm:hidden md:block"
          value={loggedInUser}
            onChange={(e)=>(setuserinfo(e.target.value))}
            >

            </input>
            {/* <h1>{loggedInUser}</h1> */}
            </div>
            <div className=' flex flex-wrap sm:flex md:justify-between sm:justify-between justify-center   md:flex'>
                {filter.map((restaurant)=>(
<Link 
key={restaurant.info.id} 
to={"/restra/"+restaurant.info.id}>


{restaurant.info.promoted?(


<RestarantCardPromoted ResData={restaurant}/>):

(
<RestarantCard  ResData={restaurant} />

)

}
 </Link>
                ))}
          


            
                        </div>
        </div>
    )
}
export default Body;