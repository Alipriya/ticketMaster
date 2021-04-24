import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import EmployeeForm from './EmloyeeForm'
import {startEditEmployees} from '../../Actions/EmployeeAction'

function EmployeeEdit(props)
{
    let dispatch=useDispatch()
    const employee_id=props.match.params.id
    const employeeData=useSelector((state)=>{
    let empData=state.employees.find((emp)=>{
    return emp._id==employee_id
    })
    return empData
    })
    const handleSubmit=(formData)=>{
    const id=props.match.params.id
     dispatch(startEditEmployees(id,formData,props))
    }
    
    return(<EmployeeForm handleSubmit={handleSubmit} employee={employeeData}/>)
}
export default EmployeeEdit