const Post = ({user,content,image})=>{
    return(
        
    <>
        <p>{content}</p>
        {image && <img src={URL.createObjectURL(image)} alt="img" width={200}/>}
        {user && <p>{user}!</p>}
    </>
    )
}
export default Post