import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {setStartDelete,setCloseTicket} from '../../Actions/TicketAction'
import "../../App.css"
import Chart from 'react-google-charts'

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
const findDepartment = (id) => {
    return departmentData.find(dept => dept._id == id)
}
const pendingTickets = ticketsData.filter(ticket=>!ticket.isResolved)
        const high = pendingTickets.filter(ticket=>ticket.priority == 'High').length
        const medium = pendingTickets.filter(ticket=>ticket.priority == 'Medium').length
        const low = pendingTickets.filter(ticket=>ticket.priority == 'Low').length
        const data = [
            ["Priority", "Tickets per Category"],
            ["High", high],
            ["Medium",medium],
            ["Low", low]
          ]
        const options = {
            title: "Ticket Priority",
            pieHole: 0.4,
            is3D: true
          }
          const data2 = []
          const Header = ["Departments", "Tickets", { role: "style" }]
          data2.push(Header)
              departmentData.map(dept=>{
                      const temp = []
                      temp.push(`${dept.name}`)
                      temp.push(pendingTickets.filter(ticket=>(ticket.department.name? ticket.department.name : findDepartment(ticket.department).name) == dept.name).length)
                      temp.push("blue")
                      data2.push(temp)
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
        <h3>Data on Pending Tickets</h3>
        <Chart
                    chartType="PieChart"
                    width="100%"
                    height="400px"
                    data={data}
                    options={options}
            />
        <Chart
                    chartType="Bar"
                    width="100%"
                    height="400px"
                    data={data2}
                    options={{
                        chart: {
                            title: 'Tickets By Department',
                        }
                    }}
                     />
    </div>)

}
export default TicketList