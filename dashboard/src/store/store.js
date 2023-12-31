import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";
import tasksSlice from "../features/userTasks/tasksSlice";
export const store = configureStore({
    reducer:{
        users:userSlice,
        userTasks:tasksSlice
    }
})