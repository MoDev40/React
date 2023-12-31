import { useState,useRef} from "react"
const CreatePost = ({user,posts,setPosts})=>{
    let [content , setContent] = useState("")
    let [image,setImage] = useState(null) 
    
    const imageRef = useRef()
    const contentRef = useRef()

    const subHandle = (e)=>{
        e.preventDefault()
        let newPost = {content,image,user}
        setPosts([newPost,...posts])
        setContent("")
        setImage(null)
        imageRef.current.value = ""
        contentRef.current.focus()
    }
    return( 
        <div>
            <h1>Create Posts</h1>
            <form action="" onSubmit={subHandle}>
                <input type="text" placeholder="Create content" value={content}
                onChange={ (e)=>{ setContent(e.target.value)}}
                ref={contentRef}
                />
                <input type="file" ref={imageRef}
                onChange={(e)=>{setImage(e.target.files[0])}}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default CreatePost