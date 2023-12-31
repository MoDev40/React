// import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// base url
const BASE_URL = "https://fakestoreapi.com"

// createSlice
export const productsSlice = createApi({
    // reducerPath
    reducerPath:"productsApi",
    // baseQuery 
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    // reload or refress or refetch if you see any changes
    tagTypes:["products"],
    // endPoints callback Function
    endpoints:(builder)=>({
        // function name
        fetchProducts:builder.query({
            query:()=>{
                return{
                    url:"products",
                    method:"GET"
                }
            },
            providesTags:["products"]
        }),

        addPoduct:builder.mutation({
            query:(newPorodct)=>({
                url:"products",
                method:"POST",
                body:newPorodct
            }),
            invalidatesTags:["products"]
        }),
        editProduct:builder.mutation({
            query:({productId,updtatedProduct})=>({
                url:`products/${productId}`,
                method:"PUT",
                body:updtatedProduct
            }),
            invalidatesTags:["products"]
        }),
        deleteProduct:builder.mutation({
            query:({productId})=>({
                url:`products/${productId}`,
                method:"DELETE",
            }),
            invalidatesTags:["products"]
        })
    })
})

export const {useFetchProductsQuery,useAddPoductMutation,useEditProductMutation,useDeleteProductMutation} = productsSlice