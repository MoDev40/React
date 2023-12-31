// import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// base url
const BASE_URL = "http://localhost:3000/api/"

// createSlice
export const userSlice = createApi({
    // reducerPath
    reducerPath:"userApi",
    // baseQuery 
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    // reload or refress or refetch if you see any changes
    tagTypes:["users"],
    // endPoints callback Function
    endpoints:(builder)=>({
        // function name
        fetchUsers:builder.query({
            query:()=>{
                return{
                    url:"users",
                    method:"GET"
                }
            },
            providesTags:["users"]
        }),

        addUser:builder.mutation({
            query:(newUser)=>({
                url:"users/add",
                method:"POST",
                body:newUser
            }),
            invalidatesTags:["users"]
        }),
        editUser:builder.mutation({
            query:({userId,updatedUser})=>({
                url:`users/update/${userId}`,
                method:"PUT",
                body:updatedUser
            }),
            invalidatesTags:["users"]
        }),
        deleteUser:builder.mutation({
            query:({userId})=>({
                url:`users/delete/${userId}`,
                method:"DELETE",
            }),
            invalidatesTags:["users"]
        })
    })
})

export const {useAddUserMutation,useDeleteUserMutation,useFetchUsersQuery,useEditUserMutation} = userSlice