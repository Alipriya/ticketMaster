import React ,{useState}from 'react'
import {useSelector,useDispatch} from 'react-redux'
function TicketForm(props)
{
    //console.log("check employeedata",props.ticketData.employees[0]._id)
    const [customerName,setCustomerName]=useState(props.ticketData?props.ticketData.customer:"")
    const [departmentName,setDepartmentName]=useState(props.ticketData?props.ticketData.department:"")
    const[empName,setEmpName]=useState(props.ticketData?props.ticketData.employees[0]._id:"")
    const [priority,setPriority]=useState(props.ticketData?props.ticketData.priority:"")
    const [message,setMessage]=useState(props.ticketData?props.ticketData.message:"")
    const customers=useSelector((state)=>{
        return state.customers
    })
    const departmentData=useSelector((state)=>{
        return state.departments
    })
 
    const employeeData=useSelector((state)=>{
        return state.employees
    })
    const onChangeValue=(e)=>{
    setPriority(e.target.value)
    }
    const handleChange=(e)=>{
        setMessage(e.target.value)
    }
    const handleSubmit=()=>{
        const formData={

            customer:customerName,
            department:departmentName,
            priority:priority,
            employees:[{_id:empName}],
            message:message,
            code:"DCT-"+Math.floor(Math.random() * 100)
           
        }
        console.log(formData)
        props.handleSubmit(formData)
    }
    return(
        <div>
    <form>
        <label>Name of the Customer</label>
        <select value={customerName} onChange={(e)=>{
        setCustomerName(e.target.value)
        }}>
            <option>Select</option>
            {customers.map((cust)=>{
                return <option key={cust._id} value={cust._id}>{cust.name}</option>
            })}
        </select>
        <br/>
        <label>Department</label>
        <select value={departmentName} onChange={(e)=>setDepartmentName(e.target.value)}>
            <option>Select</option>
            {departmentData.map((dept)=>{
                return <option key={dept._id} value={dept._id}>{dept.name}</option>
            })}
        </select>
        <br/>
      <label>Select an Employee</label>
      <select value={empName} onChange={(e)=>{setEmpName(e.target.value)}}>
        <option>Select</option>
      {
          employeeData.filter((emp)=>{
            return emp.department["_id"]==departmentName
        }).map((empdata)=>{
      return <option key={empdata._id} value={empdata._id}>{empdata.name}</option>
        })
      }
      </select>
<br/>
 <label>Priority</label>
 <div onChange={onChangeValue}>
        <input type="radio" value="High" name="priority" checked={priority==="High"} /> High
        <input type="radio" value="Medium" name="priority" checked={priority==="Medium"} /> Medium
        <input type="radio" value="Low" name="priority" checked={priority==="Low"}  /> Low
</div>
<label>Message</label>

<textarea type="text" value={message} onChange={handleChange}/>
    </form>
    <button onClick={handleSubmit}>Submit</button>
    </div>
    
    )
}
export default TicketForm