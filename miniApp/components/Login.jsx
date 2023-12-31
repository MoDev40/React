import { useState } from "react"
const Login = (props)=>{
    const [users,setUsers] = useState("")
    return(
        <>
        <div>
            <form action="" onClick={(e)=>{e.preventDefault()}}>
                <input type="text" placeholder="Username" onChange={(e)=>{ setUsers(e.target.value)}}/>
                <button type="submit" onClick={()=>{ props.setUser(users)}}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Login