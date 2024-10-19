import React from "react"
export const ContactUs=()=>{
    return (
        <form onSubmit={((e)=>(e.preventDefault()))}>
<div className=" flex justify-center ">        
    <div className="flex flex-col mx-3 justify-center  mt-5 ">
    <h1 className="font-bold text-4xl items-center mt-2">Contact Us Form</h1>
            <label>Enter Your Name:</label>
<input type="text" className="w-96 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your Name" ></input>
<label>Enter Your Email:</label>
<input type="text" className="w-96 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your Email" ></input>

<label>Enter Your Phone Number:</label>
<input type="text" className="w-96 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your Number" ></input>


<label>Message:</label>
<textarea type="text" className=" w-96 h-24 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your Message" >
    </textarea>

<button className="w-96 bg-blue-950 mt-5 p-5 font-bold text-white text-2xl">
    Submit
</button>
    </div>


        </div>
        </form>
    )
}