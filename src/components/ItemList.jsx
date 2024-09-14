 const ItemList=({items}) =>{
    console.log(items);
    return (
        
     <div>
        
            {items.map((item)=>
            (
               
                <div  key={item?.card?.info?.id}
                className="p-2 m-2 border-b-2 ">
                    <div className="  flex   justify-between items-center ">

       
<div className="w-2/3 ">
<span className="font-bold">
{item?.card?.info?.name}
</span>
<br></br>
<span className="font-bold">-₹
{item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.defaultPrice/100}
</span>

<p className="">{item?.card?.info?.description}</p>
</div>
<div className="relative w-1/4 ">
<img className=" rounded-xl  "
src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
            alt={item?.card?.info?.name}>
                
            </img>
            <buttom className="absolute -bottom-2 ml-[30%] cursor-pointer text-green-300 w-20 h-8 text-center pt-1 rounded-md bg-gray-100">Add</buttom>
            </div>
                </div> 
                </div>
                
           ) )  }
    
    </div>
    )
 }

 export default ItemList;