export const ticketReducer=(state=[],action)=>{
switch(action.type)
{
    case 'SET_TICKETS':{
        return [...action.payload]
    }
    case 'ADD_TICKETS':{
        return [...state,action.payload]
    }
    case 'EDIT_TICKET':{
        return state.map((ticket)=>{
            if(ticket._id==action.payload._id)
            {
                return JSON.parse(JSON.stringify(action.payload))
            }
            else {
                return JSON.parse(JSON.stringify(ticket))
            }
        })
    }
    case 'DELETE_TICKET':{
       const filteredTickets=state.filter((ticket)=>{
           return ticket._id!==action.payload
       })
       return filteredTickets
    }
    default:{
        return [...state]
    }
}
}