import React from 'react'
import {Link} from 'react-router-dom'
import "../App.css"
const Header=()=>{
    return( <div>
    <p className="headerContent">Ticketmaster</p>
    <hr className="line"/>
    <div className="header">
   <Link to="/" className="homeLink">Home</Link>
      <Link to="/customers" className="customersLink">Customers</Link>
      <Link to="/departments" className="departmentsLink">Departments</Link>
      <Link to="/employees" className="employeesLink">Employees</Link>
      <Link to="/tickets" className="ticketsLink">Tickets</Link>
      </div>
    </div>)
}
export default Header