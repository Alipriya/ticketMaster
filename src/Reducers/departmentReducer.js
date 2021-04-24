export const departmentReducer=(state=[],action)=>{
switch(action.type)
{
  case 'SET_DEPARTMENT':{
      return [...action.payload]
  }  
  case 'ADD_DEPARTMENT':{
      return [...state,action.payload]
  }
  case 'DELETE_DEPARTMENT':{
    return state.filter((dept)=>{
        return dept._id!==action.payload
    })
  }
  default:{
      return [...state]
  }
}
}