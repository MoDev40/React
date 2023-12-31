import React from "react";
import { useState, useEffect} from "react";
import Login from './components/Login'
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

let App = ()=>{
   let [user,setUser] = useState("mcDev")
   let [posts,setPosts] = useState([])

   useEffect(()=>{

   },[user])

   if(!user) return <Login setUser = {setUser}/>
   return(
      <>
      <Header user={user} setUser={setUser}/><br />
      <CreatePost user={user} posts={posts} setPosts={setPosts} />
      <PostList posts={posts}/>
      </>
   )
}
export default App