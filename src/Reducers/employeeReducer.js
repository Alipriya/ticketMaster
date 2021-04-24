export const employeeReducer=(state=[],action)=>{
switch(action.type)
{
    case 'SET_EMPLOYEES':{
        return [...action.payload]
    }
    case 'ADD_EMPLOYEE':{
        return [...state,action.payload]
    }
    case 'EDIT_EMPLOYEES':{
        return state.map((emp)=>{
            if(emp._id==action.payload._id)
            {
                console.log("deep copy",JSON.parse(JSON.stringify(action.payload)))
                return JSON.parse(JSON.stringify(action.payload))
            }
            else {
                return JSON.parse(JSON.stringify(emp))
            }
        })
    }
    case 'DELETE_EMPLOYEE':{
       return state.filter((emp)=>{
            return emp._id!==action.payload
        })
    }
    default:{
        return [...state]
    }
}
}