import React from 'react'
import {useSelector} from 'react-redux'
function TicketShow(props)
{
    const ticketShowData=useSelector((state)=>{
        return state.tickets.find((ticket)=>{
            return ticket._id==props.match.params.id
        })
    })
    const customerData=useSelector((state)=>{
        return state.customers.find((cust)=>{
            return cust._id==ticketShowData.customer
        })
    })
    const departmentData=useSelector((state)=>{
        return state.departments.find((department)=>{
            return department._id==ticketShowData.department
        })
    })
    const employeeData=useSelector((state)=>{
        console.log("check state employees",state.employees)
        const filteredData= state.employees.find((emp)=>{
            console.log("check empid",emp._id)
            console.log("check ticket show employee id",ticketShowData.employees[0]._id)
            return emp._id==ticketShowData.employees[0]._id
        })
        return filteredData
    })
    console.log("employees Data",employeeData)
return(
    <div className="Form">
    <h1 style={{color:"blue"}}>Ticket Details</h1>
    
    <h1>Name of the Customer: <span style={{color:"blue"}}>{customerData.name}</span></h1>
    <h1>Name of the Department: <span style={{color:"blue"}}>{departmentData.name}</span></h1>
    <h1>Assigned to: <span style={{color:"blue"}}>{employeeData.name}</span></h1>
    <h1>Message: <span style={{color:"blue"}}>{ticketShowData.message}</span></h1>
   
    </div>
)

}
export default TicketShow