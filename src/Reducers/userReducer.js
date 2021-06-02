export const userReducer=(state={},action)=>
{
    switch(action.type)
    {
        case 'GET_USER':{
            console.log("check",action.payload)
            return {...action.payload}
        }
        case 'LOGIN':{
            console.log("check",action.payload)
            return {...action.payload}
        }
        
        case 'REGISTER':{
            console.log("check",action.payload)
            return {...action.payload}
        }
        case 'LOGOUT':{
            return {...state}
        }
        default:{
            return {...state}
        }
    }
}