export const customerReducer=(state=[],action)=>{
switch(action.type)
{
    case 'SET_CUSTOMERS':{
        return [...action.payload]
    }
    case 'ADD_CUSTOMER':{
        console.log("add reducer")
        return[...state,action.payload]
    }
    case 'EDIT_CUSTOMER':{
        console.log("edit reducer")
        return state.map((data)=>{
            if(data._id==action.payload._id) 
            {
                return {...action.payload}
            }
            else{
                return {...data}
            }
        })
        
    }
    case 'DELETE_CUSTOMER':{
        return state.filter((cust)=>{
            console.log("check the value of cust",cust)
            console.log("check the value of action.payload",action.payload)
            return cust._id!=action.payload
        })
    }
    default:{
        return [...state]
    }
}
}