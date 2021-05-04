import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {setStartDelete,setCloseTicket} from '../../Actions/TicketAction'
import "../../App.css"
function TicketList()
{
    let dispatch=useDispatch()
const ticketsData=useSelector((state)=>{
    return state.tickets
})

const customersData=useSelector((state)=>{
    return state.customers
})
const departmentData=useSelector((state)=>{
    return state.departments
})
const employeesData=useSelector((state)=>{
    return state.employees
})

    return(<div className="ticketList">
        <h1 style={{fontFamily:"sans-serif"}}>Listing Tickets -{ticketsData.length}</h1>
        <Link to="/addTicket">Add Ticket</Link>
        <table className="styled-table">
            <thead>
            <tr>
            <th>Code</th>
            <th>Customer Name</th>
            <th>Assigned To</th>
            <th>Department</th>
            <th>Priority</th>
            <th>Message</th>
            <th>Status</th>
            <th className="ActionTitle">Action</th>
            </tr>
            </thead>
     
         <tbody>
         {ticketsData.map((ticket,index)=>{
             return(
                 
                 
                 <tr>
                     <td><Link to={`/ticketShow/${ticket._id}`}>{ticket.code}</Link></td>
                     <td>{customersData.find((cust)=>{
                        return cust._id==ticket.customer
                          })["name"]}</td>
                    <td>{employeesData.find((emp)=>{
                        return emp._id==ticket.employees[0]._id
                    })["name"]}</td>
                     <td>{departmentData.find((dept)=>{
                         return ticket.department==dept._id
                     })["name"]}</td>
                     <td>{ticket.priority}</td>
                     <td>{ticket.message}</td>
                     {ticket.isResolved?
                    (<td>Complete</td>):(<td>Open</td>)
                    }
                    <td
                    className="Actions"
                    ><Link to={`/ticketEdit/${ticket._id}`}>Edit</Link>
                    <button className="button1" onClick={()=>dispatch(setStartDelete(ticket._id))}>Delete</button>
                    <button  className="button1" onClick={()=>dispatch(setCloseTicket(ticket._id,{isResolved:true}))}>Close Ticket</button>
                    </td>
                 </tr>
                 
             )
         })
        }
         </tbody>
     
        </table>
    </div>)

}
export default TicketList