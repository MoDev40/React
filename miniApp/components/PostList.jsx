import Post from "./Post"
const PostList = ({posts})=>{
    return(
        <div>
        <h1>PostList</h1>
          { posts.map( (post,index) => <Post key={index} {...post} /> ) }
        </div>
    )
}
export default PostList