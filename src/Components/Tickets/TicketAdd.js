import React from 'react'
import TicketForm from './TicketForm'
import {useDispatch} from 'react-redux'
import {setAddTicket} from '../../Actions/TicketAction'
function TicketAdd(props)
{
    let dispatch=useDispatch()
    const handleSubmit=(formData)=>{
    dispatch(setAddTicket(formData,props))
    }
    return <TicketForm handleSubmit={handleSubmit}/>
}
export default TicketAdd