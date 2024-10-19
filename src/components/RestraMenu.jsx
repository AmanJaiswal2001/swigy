import React, { useState } from 'react'
import { useEffect } from 'react'
import Shimmar from './Shimmar'

import { useParams  } from 'react-router-dom'
import useRestraMenu from '../utils/useRestraMenu'
import ResCatgerories from './ResCatgerories'


const RestraMenu = () => {
//const[infoHotel,setinfoHotel]=useState(null);

const {resId }=useParams();
//console.log(resId);

const infoHotel=useRestraMenu(resId);

const [showIndex,setshowIndex]=useState(null);
// useEffect(()=>{
//   fetchMenu();
// },[])

// const fetchMenu= async()=>{
//   const data= await fetch(
//     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65200&lng=77.16630&restaurantId=${resId`);
//       const json= await data.json()
//   console.log(json);
//   setinfoHotel(json.data); 
//   }

  

if(infoHotel===null){
  return<Shimmar/>
}



  const {name,cuisines,avgRating}= infoHotel?.cards[2]?.card?.card?.info;
  const{itemCards}=
  infoHotel?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//console.log(infoHotel?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

const categories=infoHotel?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
  c.card?.['card']?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")



// console.log(categories);
  return (

    <div  className='text-center m-5'>
{/* <h1>{infoHotel?.cards[2]?.card?.card?.info?.name}</h1> */}
<h1 className='font-bold text-2xl'>{name}</h1>
<p className='font-bold text-lg'>{cuisines.join(",")}</p>
{/* <h3>{avgRating}</h3>  */}
 {/* <h1>{infoHotel?.cards[2]?.card?.card?.info?.cloudinaryImageId}</h1> */}
{/* <h3>Menu</h3> */}

{categories.map((category, index)=>(
  <ResCatgerories  
   key={category?.card?.card.title}
  data={category?.card?.card}    
  showItem={index==showIndex?true:false}
    setShowIndex={()=>setshowIndex(index)}
  /> 
  // showItems={false}/>
))}















{/* <div>
    <ul>
    {itemCards.map
     ((items=> 
     <li key={items.card.info.id}>{items.card.info.name} 
     {"  "}{"RS"} {items.card.info.defaultPrice/100||items.card.info.price/100}</li>))}
 </ul>
</div> */}

    </div>
  )
}

export default RestraMenu