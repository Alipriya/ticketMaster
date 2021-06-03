import React from 'react'
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Components/Home";
import CustomerList from "./Components/Customers/CustomerList";
import CustomerShow from "./Components/Customers/CustomerShow";
import CustomerEdit from "./Components/Customers/CustomerEdit";
import CustomerAdd from "./Components/Customers/CustomerAdd";
import DepartmentList from "./Components/DepartmentList";
import EmployeeList from "./Components/Employees/EmployeesList";
import EmployeeAdd from "./Components/Employees/EmployeeAdd";
import EmployeeEdit from "./Components/Employees/EmployeeEdit";
import EmployeeShow from "./Components/Employees/EmployeeShow";
import TicketList from "./Components/Tickets/TicketList";
import TicketAdd from "./Components/Tickets/TicketAdd";
import TicketEdit from "./Components/Tickets/TicketEdit";
import TicketShow from "./Components/Tickets/TicketShow";
import "./App.css";
import Register from './Components/Register'
import Login from './Components/Login'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Logout from "./Components/Logout";
import {useSelector} from 'react-redux'
function App() {
	const users=useSelector((state)=>{
		return state.user
	  })
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
					<Route path="/users/logout" component={Logout}/>
					<Route path="/users/register" component={Register}/>
					<Route path="/users/login" component={Login} />
					{localStorage.getItem("token") && users.token||localStorage.getItem("token") && users._id ?(<Switch>
					<Route path="/customersEdit/:id" component={CustomerEdit} />
					<Route path="/addCustomer" component={CustomerAdd} />
					<Route path="/customerShow/:id" component={CustomerShow} />
					<Route path="/customers" component={CustomerList} />
					<Route path="/departments" component={DepartmentList} />
					<Route path="/employee/show/:id" component={EmployeeShow} />
					<Route path="/employeeEdit/:id" component={EmployeeEdit} />
					<Route path="/addEmployees" component={EmployeeAdd} />
					<Route path="/employees" component={EmployeeList} />
					<Route path="/ticketShow/:id" component={TicketShow} />
					<Route path="/ticketEdit/:id" component={TicketEdit} />
					<Route path="/addTicket" component={TicketAdd} />
					<Route path="/tickets" component={TicketList} />
					<Route path="/" component={Home} />
					
					</Switch>):(<Switch>
					<Route path="/users/login" component={Login} />
					<Route path="/" component={Home} />
					</Switch>)
					}
					
				</Switch>
        <Footer/>
			</div>
		</BrowserRouter>
	);
}

export default App;
