import { useEffect, useState } from "react";



//create a custom hooks//
 const useRestraMenu=(resId)=>{

const[infoHotel,setinfoHotel]=useState(null);

//fetch data//

useEffect(()=>{
    fetchData();
},[])

const  fetchData= async()=>{
const data= await fetch(

     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId}`);
      const json= await data.json()
//   console.log(json);
  setinfoHotel(json.data);
 

}
    return infoHotel;
 }


 export default useRestraMenu;