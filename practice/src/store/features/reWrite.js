import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query";

const BASE_URL = ""

export const bookSlice = createApi({
    reducerPath:"bookApi",
    baseQuery:fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    tagTypes:["books"],

    endpoints:(builder)=>({
        fetchBooks:builder.query({
            query:()=>{
                return{
                    url:"books",
                    method:"GET"
                }
            }
        }),
        addBook:builder.mutation({
            query:(newBook)=>({
               url:"books",
               method:"POST",
               body:newBook
            }),
            invalidatesTags:["books"]
        }),

        editBook:builder.mutation({
            query:({bookId,updatedBook})=>({
                url:`book/${bookId}`,
                method:"PUT",
                body:updatedBook
            }),
            invalidatesTags:["books"]
        }),
        deleteBook:builder.mutation({
            query:({bookId})=>({
                url:`book/${bookId}`,
                method:"DELETE",
            }),
            invalidatesTags:["books"]
        })
    })
})

export const {useFetchBooks,useEditBooks,useDeleteBooks} = bookSlice

// old way
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    books:[],
    status:"idle",
    error:nul
}
export const fetchAll = createAsyncThunk("book/fetchAll",async () =>{
    const res = await axios.get("http")
    return res.data
})

export const addNew = createAsyncThunk("book/addNew", async (newThing)=>{
    const res = await axios.post("http",newThing)
    return res.data
})

const booksSlice = createSlice({
    name:"books",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchAll.pending,(state)=>{
            state.status = "Loading"
        })
        .addCase(fetchAll.fulfilled,(state,action)=>{
            state.status = "success"
            state.books = action.payload
        })
        .addCase(fetchAll.rejected,(state,action)=>{
            state.status = "failed"
            state.error = action.error.message
        })
        .addCase(addNew.fulfilled,(state,action)=>{
            state.status = "success"
            state.books.push(action.payload)
        })
    }
})