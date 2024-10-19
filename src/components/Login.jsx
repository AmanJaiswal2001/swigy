import { useRef, useState } from "react"
import { useDispatch } from "react-redux";
import { checkValidData } from "../utils/Validate";

export const Login=()=>{
    
    const[islogin,setislogin]=useState(false)
    
    const[errormessage,seterrormessage]=useState(null);
    const name=useRef(null)
const email=useRef(null);
const password=useRef(null);

    
    const dispatch=useDispatch();

    const validate=()=>{
        const message=checkValidData(email.current.value,password.current.value);
        seterrormessage(message);
        
        if(message) return


if(!islogin){
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
    //   photoURL: PHOTOURL,  
    }).then(() => {
      const {uid,email,displayName} = auth.currentUser;
      dispatch
      (addUser
        ({uid:uid,email:email,displayName:displayName}))
    }).catch((error) => {
        seterrormessage(error.message);
      });
})

.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });
}
else{
    signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  seterrormessage(errorCode+"-"+errorMessage);
});
}
   
}

const toggleForm=()=>{
    setislogin(!islogin);
    // console.log(setislogin)
}


    return(
        <form onSubmit={((e)=>(e.preventDefault()))}>
        <div className=" flex justify-center ">        
            <div className="flex flex-col mx-3 justify-center  mt-5 ">
                   {!islogin &&(<label>Enter Your Name:</label> )}
                 {!islogin && (<input  ref={name}type="text" className="w-96 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your Name" />)}

       
        <label>Enter Your Email:</label>
        <input ref={email} type="text" className="w-96 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your Email" ></input>
        
       
        <label>Enter Your Password:</label>
        <input ref={password} type="Password" className="w-96 bg-blue-950  p-3  mt-4 text-white"placeholder="Enter your password" ></input>
        
        
      
        <button onClick={validate} className="w-96 h-12 text-center bg-blue-950 mt-5 p-2 font-bold text-white text-2xl">{islogin?"Login":"Sign In"}
            
        </button>
        <p className="text-red-600 mt-5 text-2xl font-bold text-center">{errormessage}</p>
           
        <p  className="p-4 text-xl font-bold cursor-pointer"onClick={toggleForm}>{islogin?"already login the food app":"Please Log In !"}</p>
            </div>
            </div>
            </form>
    )
}