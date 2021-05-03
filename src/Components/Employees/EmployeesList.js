import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {setStartEmployees,setDeleteEmployee} from '../../Actions/EmployeeAction'
import "../../App.css"
function EmployeeList(props)
{
let dispatch=useDispatch()
useEffect(()=>{
    dispatch(setStartEmployees())
},[])
const handleRemove=(id)=>{
    dispatch(setDeleteEmployee(id))
}
let employeeList=useSelector((state)=>{
    return state.employees})
return(<div className="employeeList">
    <h1>Employee List {employeeList.length}</h1>
    <Link to="/addEmployees">Add Employees</Link>
    <table className="styled-table">
        <thead >
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Department</th>
            <th className="ActionTitle">Actions</th>
            </tr>
        </thead>
        <tbody>
            {employeeList.map((emp)=>{
                return(<tr>
                    <td><Link to={`/employee/show/${emp._id}`}>{emp.name}</Link></td>
                    <td>{emp.email}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.department["name"]}</td>
                    <td className="Actions"><Link to={`/employeeEdit/${emp._id}`}>Edit</Link>
                    <button className="button1" onClick={()=>handleRemove(emp._id)}>Remove</button>
                    </td>
                </tr>)
            })}
        </tbody>
    </table>
</div>)
}
export default EmployeeList