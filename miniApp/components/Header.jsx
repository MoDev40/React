const Header = ({user,setUser})=>{
    return( 
        <div>
            <span>Welcome {user}!</span>
            <button onClick={()=>{ setUser("")}}>logOut</button>
        </div>
    )
}

export default Header