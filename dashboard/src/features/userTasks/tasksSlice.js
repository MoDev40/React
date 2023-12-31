import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userTask:{
        userEmail:'',
        rentedCar:[],
        returnedCar:[]
    },
    userTasks:[]
}
const tasksSlice = createSlice({
    name:"userTasks",
    initialState,
    reducers:{
        rentCar:(state)=>{
            state.userTask.userEmail = "moha"
            state.userTask.rentedCar = state.userTask.rentedCar.concat({name:"honda",price:1})
            state.userTask.returnedCar = state.userTask.rentedCar.concat({name:"honda",price:1})
            state.userTasks = state.userTasks.concat(state.userTask)
            window.localStorage.setItem("userTasks",JSON.stringify(state.userTasks))
        }
    }
})

export const {rentCar} = tasksSlice.actions
export default tasksSlice.reducer