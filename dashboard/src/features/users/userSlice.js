import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users:JSON.parse(window.localStorage.getItem("users"))||[],
    currentUser:JSON.parse(window.localStorage.getItem("currenUser"))||{},
}
const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{ 
        createUser:(state,action)=>{
            const {payload} = action
            state.users = state.users.concat(payload)
            window.localStorage.setItem("users",JSON.stringify(state.users))
        },
        logInUser:(state,action)=>{
            const {payload} = action
            state.currentUser = payload
            window.localStorage.setItem("currenUser",JSON.stringify(state.currentUser))
        },
        logOutUser:(state)=>{
            state.currentUser = {}
            window.localStorage.removeItem("currenUser")
        }
    }
})

export const {createUser,logInUser,logOutUser} = userSlice.actions
export default userSlice.reducer 