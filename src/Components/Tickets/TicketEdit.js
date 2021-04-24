import React from 'react'
import TicketForm from './TicketForm'
import {useSelector,useDispatch} from 'react-redux'
import {setEditTicket} from '../../Actions/TicketAction'
function TicketEdit(props)
{
    let dispatch=useDispatch()
    const ticket_id=props.match.params.id
    const ticketsdata=useSelector((state)=>{
       const ticket_data=state.tickets.find((tick)=>{
           return ticket_id==tick._id
       })
       return ticket_data
    })
    const handleSubmit=(formData)=>{
    dispatch(setEditTicket(formData,props))
    }
    return(<TicketForm ticketData={ticketsdata} handleSubmit={handleSubmit}/>)
}
export default TicketEdit