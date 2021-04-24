import axios from "axios"

export const set_Tickets=(tickets)=>{
    return{
        type:"SET_TICKETS",
        payload:tickets
    }
}
export const set_Start_Tickets=()=>{
    return(dispatch)=>{
        axios.get("https://dct-ticket-master.herokuapp.com/tickets",{
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const tickets=response.data
            dispatch(set_Tickets(tickets))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
export const addTickets=(ticket)=>{
    return{
        type:"ADD_TICKETS",
        payload:ticket
    }
}
export const setAddTicket=(formData,props)=>{
    return (dispatch)=>{
        axios.post("https://dct-ticket-master.herokuapp.com/tickets",formData,{
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const ticket=response.data
            dispatch(addTickets(ticket))
          props.history.push("/tickets")
        })
    }
}
export const editTicket=(ticketItem)=>{
    return{
        type:"EDIT_TICKET",
        payload:ticketItem
    }
}
export const setEditTicket=(formData,props)=>{
    return(dispatch)=>{
        const ticket_id=props.match.params.id
        axios.put(`https://dct-ticket-master.herokuapp.com/tickets/${ticket_id}`,formData,
        {
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const ticket=response.data
            dispatch(editTicket(ticket))
            props.history.push("/tickets")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
}
export const setDelete=(id)=>{
    return{
    type:"DELETE_TICKET",
    payload:id
    }
}
export const setStartDelete=(ticket_id)=>{
    return (dispatch)=>{
    axios.delete(`https://dct-ticket-master.herokuapp.com/tickets/${ticket_id}`,{
        headers:{
            'x-auth':localStorage.getItem("token")
        }
    })
    .then((response)=>{
        dispatch(setDelete(response.data._id))
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}