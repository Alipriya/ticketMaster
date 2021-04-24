import React from 'react'
import {useDispatch} from 'react-redux'
import {startAddEmployee} from '../../Actions/EmployeeAction'
import EmployeeForm from './EmloyeeForm'
function EmployeeAdd(props)
{
    let dispatch=useDispatch()
    const handleSubmit=(formData)=>{
     console.log("check formData",formData)
     dispatch(startAddEmployee(formData,props))
    
    }
    return(<EmployeeForm handleSubmit={handleSubmit}/>)
}
export default EmployeeAdd