import React, { useEffect, useState } from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {About} from './components/About'
import { ContactUs } from './components/ContactUs';
import Error from './components/Error';
import RestraMenu from './components/RestraMenu'
import { createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import UserContext from './utils/UserContext';


//make a separate card and componenet //



const Applayout = () => {


const [userinfo,setuserinfo]=useState();


useEffect(()=>{
   const  data = {
        name:"Amanjaiswal",
    };
    setuserinfo(data.name);
    console.log(data.name);
},[]);



    return (
    <UserContext.Provider value={{loggedInUser:userinfo,setuserinfo}}>
<div className='app'>
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
    
    
    )
}

const appRouter=createBrowserRouter(
    [{
path:"/",
element:<Applayout/>,
children:[
    {
        path:"/",
        element:<Body/>
    },
   
   
   
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<ContactUs/>
    
    },
    {
        path:"/restra/:resId",
        element:<RestraMenu/>
    
    }
],
errorElement:<Error/>



},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
