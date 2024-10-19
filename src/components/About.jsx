import React, { useEffect, useState } from "react"
import {AboutCard} from "./AboutCard"
import Shimar from "./Shimmar"
export const About=()=>{
    const[listOfRestaurants,setListOfRestrant]=useState([]);
 const[manyRestaurants,setManyResturants]=useState({info:[]});

    useEffect(()=>{
        fetchData();
       },[]);
    
       const fetchData= async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
    const json=await data.json();
    //console.log(json);
    setListOfRestrant(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    //  setfilter(json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants);
console.log(json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants)        
}
//     useEffect(()=>{
//         etchData();
//        },[]);
    
//        const etchData= async()=>{
//         const data=await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
//     const json=await data.json();
//     console.log(json);
//     setManyResturants(json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info||[]);
//      console.log(json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle.info||[])
//     //
// // console.log(manyRestaurants);
// }


    if(!listOfRestaurants || listOfRestaurants.length === 0){
        return <Shimar/>
           }


    return(
        <>
 
 <h1 className="text-black font-bold text-4xl text-center mt-10">About</h1>

 <div className="flex overflow-x-auto space-x-4 p-4">
    {listOfRestaurants.map((res)=>(
        <AboutCard key={res.info.id} resData={res}/>
  
  ))}

</div>
<div className="flex overflow-x-auto space-x-4 p-4">
    {listOfRestaurants.map((res)=>(
        <AboutCard key={res.info.id} resData={res}/>
  
  ))}

</div>
{/* <div className="flex overflow-x-auto space-x-4 p-4">
   {manyRestaurants.map((card)=>(
    <SpecialAboutCard   resdata={card}/>
   ))}
</div>  */}



{/* <div className="flex justify-between m-10 h-1/3 z-10">

<div className="mt-16  ">
    <img  className="rounded-full "src="https://5.imimg.com/data5/SELLER/Default/2022/3/FJ/JG/FG/11444717/food-delivery-app-500x500.jpg" alt=""/>
</div>

<div className="bg-gray-300 w-1/2 ">
    <p className="p-5 text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aperiam maxime deleniti voluptatum voluptatem, omnis quidem praesentium distinctio sint nobis doloremque, similique facilis voluptate eum rerum veniam id repellendus quisquam?</p>

</div>



</div> */}
  
        {/* <UserClass  name={"Aman"} Location={"Deoria"} Contact={"amanjaiswalcii@gmail.com"}/> */}
        </>
    )
}