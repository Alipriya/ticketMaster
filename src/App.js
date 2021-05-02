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
import Header from "./Components/Header";
function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Switch>
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
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
