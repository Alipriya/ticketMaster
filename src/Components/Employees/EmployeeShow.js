import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function EmployeeShow(props)
{
    const employeeDetail=useSelector((state)=>{
       return state.employees.find((emp)=>{
            return emp._id==props.match.params.id
        })
    })
    return(<div className="Form">
        <h1 style={{color:"blue"}}>Employee Details</h1>
        <h2>Employee Name: <span style={{color:"blue"}}>{employeeDetail.name}</span></h2>
        <h2>Employee Email: <span style={{color:"blue"}}>{employeeDetail.email}</span></h2>
        <h2>Employee Mobile: <span style={{color:"blue"}}>{employeeDetail.mobile}</span></h2>
        <h2>Employee Department: <span style={{color:"blue"}}>{employeeDetail.department.name}</span></h2>
    </div>)

}
export default EmployeeShow