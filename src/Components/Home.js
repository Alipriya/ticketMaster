import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setStartEmployees} from '../Actions/EmployeeAction'
import {startSetCustomers} from '../Actions/CustomerAction'
import {startSetDepartment} from '../Actions/DepartmentAction'
import {set_Start_Tickets} from '../Actions/TicketAction'
function Home(props)
{
  let dispatch=useDispatch()
  useEffect(()=>{
  dispatch(startSetCustomers())
  dispatch(setStartEmployees())
  dispatch(startSetDepartment())
  dispatch(set_Start_Tickets())
  },[])
    return(<div>
      <h1>Welcome to Ticket Master</h1>
   
    </div>)
}
export default Home