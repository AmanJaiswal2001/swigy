import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { cleanCart } from "../utils/cartSlice";

const Cart=()=>{
   
    const dispatch=useDispatch()
   const cartItems=useSelector((store)=>store.cart.items);
   console.log(cartItems);
  
  const ClearCart=()=>{
dispatch(cleanCart())
  }
  
   return( 
   
   
   <div className=" text-center  m-4 p-4">
   <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="bg-black text-white rounded-lg m-3 p-3 text-center"
        onClick={ClearCart}>
            ClearCart
        </button>
        {cartItems.length===0 && <h1 className="font-bold">Cart is empty Add Items to the cart</h1>}
            <ItemList items={cartItems}/>
        </div>
    </div>
   )
}

export default Cart;