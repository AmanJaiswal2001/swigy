import { createSlice } from "@reduxjs/toolkit";


const User=createSlice(
    {
        name:"user",
        initialState:null,
        reducers:{
            addUser:(state,action)=>{
            return action.payload;
        },
        removeUser:(satate,action)=>{
            return null;
        }
    }
}
);
export const {addUser,removeUser}=User.actions;
export default User.reducer