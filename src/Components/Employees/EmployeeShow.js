import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
function EmployeeShow(props)
{
    const employeeDetail=useSelector((state)=>{
       return state.employees.find((emp)=>{
            return emp._id==props.match.params.id
        })
    })
    return(<div>
        <h1>Employee Details</h1>
        <h2>Employee Name -{employeeDetail.name}</h2>
        <h2>Employee Email -{employeeDetail.email}</h2>
        <h2>Employee Mobile -{employeeDetail.mobile}</h2>
        <h2>Employee Department-{employeeDetail.department.name}</h2>
    </div>)

}
export default EmployeeShow