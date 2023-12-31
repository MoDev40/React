export const intialstate = {
    contents:[]
}

const todoListReducer = (state,action)=>{
    const {type,payload} = action
    switch(type){
        case "ADD_TO_LIST":
            return{
                ...state,
                contents: payload
            }
        case "REMOVE_FROM_LIST":
            return{
                ...state,
                contents:payload
            }
        default:
            throw new Error("Reducer")
    }
}

export default todoListReducer