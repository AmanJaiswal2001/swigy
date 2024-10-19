


export const SpecialAboutCard=(props)=>{
    const {resData}=props
    if (!resData || !resData.imageId) {
        return null; // Agar undefined hai toh kuch render mat karo
    }
     const {
        description,imageId
        }=resData
return(
    <div className="mt-14 ">
    <div className='w-80  rounded-lg bg-gray-100'>

<h1>{description}</h1>

<img className=" rounded-xl  w-full  h-80 p-3 " src=
{`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
/>
</div>
</div>
)
}