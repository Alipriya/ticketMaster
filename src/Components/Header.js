import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import "../App.css"
const Header=()=>{
  const users=useSelector((state)=>{
    return state.user
  })
    return(
    <div>
      {localStorage.getItem("token") ?
      <div className="header">
      <Link to="/users/logout">Logout</Link>
      </div>
      
      :
      <div className="header">

      <Link to="/users/register" className="registerLink">Register</Link>    
      <Link to="/users/login" className="loginLink">Login</Link>
      </div>
    }
    
    <p className="headerContent">Ticketmaster</p>
    <hr className="line"/>
    {

    localStorage.getItem("token") && users.token?
    <div className="header">
      <Link to="/" className="homeLink">Home</Link>
      <Link to="/customers" className="customersLink">Customers</Link>
      <Link to="/departments" className="departmentsLink">Departments</Link>
      <Link to="/employees" className="employeesLink">Employees</Link>
      <Link to="/tickets" className="ticketsLink">Tickets</Link>
      </div>
      :<></>
    }
    </div>)
}
export default Header