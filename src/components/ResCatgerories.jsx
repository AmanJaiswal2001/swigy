import React, { useState } from 'react'
import ItemList from './ItemList'

const ResCatgerories=({data , showItem, setShowIndex })=> {


  //   const[showItem,setshowItem]=useState(false)
    //  console.log(data.data.title)
    // console.log(data)
 
 const handleClick=()=>{
    setShowIndex();
//      setshowItem(!showItem)
 };

  return (
    <div>

{/* header */}
<div className='md:w-6/12 bg-yellow-100 shadow   p-2 m-auto'>
    <div className='font-bold  cursor-pointer flex justify-between' onClick={handleClick}>
  <div className='mx-2'>
    {data.title}
    <span className='p-2'>({data.itemCards.length})</span>
    </div>
    <button  >
     <i className="fa-solid fa-angle-down"></i>

    </button>
    </div>
   
    <div className='text-left '>
   {showItem && <ItemList items={data?.itemCards}/>}
    </div>
    {/* console.log(data.title) */}
     {/* <span>Down Arrow</span> */}
     </div>
{/* body  */}

    </div>
  )
}

export default ResCatgerories