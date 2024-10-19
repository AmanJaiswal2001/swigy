export const AboutCard=(props)=>{
    const {resData}=props

    const {cloudinaryImageId,name}=resData.info
return(
    <div className="mt-14 ">
    <div className='w-80  rounded-lg bg-gray-100'>



<img className=" rounded-xl  w-full  h-80 p-3 " src=
{"https:media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }/>
</div>
<h1 className="font-bold  text-center text-2xl mt-2">{name}</h1>
</div>
)
}