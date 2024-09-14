import React from "react";

const RestarantCard = (props) => {
    const {ResData}=props

    const {cloudinaryImageId ,
        name,
        cuisines,
        avgRating,
        costForTwo,
        
          
        
    }=ResData.info;
    return (
        <div className="flex mx-10 py-5  ">
                <div className='w-[250px]  rounded-lg bg-gray-100'>

        
        
            <img className=" rounded-xl h-1/2 w-full p-3 " src=
            {"https:media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId }/>
          
            <h1 className="p-3 -mt-3 font-bold ">{name}</h1>
            <h4 className="p-3 -mt-3 font-bold">{cuisines.join(" , ")}</h4>
            <h4 className="p-3 -mt-3 font-bold">{avgRating}stars</h4>
            <h4 className="p-3 -mt-3 font-bold">{costForTwo}</h4>
            {/* <h4 style={{ marginTop: "-15px", padding:"5px "}}>{ResData.info.sla.deliveryTime}minutes</h4> */}
            <h4 className="p-3 -mt-3 font-bold">{ResData.info.sla.slaString}</h4>
        </div>
        </div>

    )
}


//higher order content//

//input=restrocard =>output restracartprometed//

 export const withPromtedLabel=(RestarantCard)=>{
    return (props)=>{
        return (

            <div>
                <label>Promoted</label>
                <RestarantCard {...props}/>
            </div>
        )
    }
}
 


export default RestarantCard;