import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
function TicketForm(props) {
	//console.log("check employeedata",props.ticketData.employees[0]._id)
	const [customerName, setCustomerName] = useState(
		props.ticketData ? props.ticketData.customer : ""
	);
	const [departmentName, setDepartmentName] = useState(
		props.ticketData ? props.ticketData.department : ""
	);
	const [empName, setEmpName] = useState(
		props.ticketData ? props.ticketData.employees[0]._id : ""
	);
	const [priority, setPriority] = useState(
		props.ticketData ? props.ticketData.priority : ""
	);
	const [message, setMessage] = useState(
		props.ticketData ? props.ticketData.message : ""
	);
	const [errors, setErrors] = useState({});

	const customers = useSelector(state => {
		return state.customers;
	});
	const departmentData = useSelector(state => {
		return state.departments;
	});

	const employeeData = useSelector(state => {
		return state.employees;
	});
	const onChangeValue = e => {
		setPriority(e.target.value);
		setErrors({})
	};
	const handleChange = e => {
		setMessage(e.target.value);
		setErrors({})
	};
	function validate() {
		let errors = {};

		let isValid = true;
		if (!customerName || customerName=="Select") {
			isValid = false;

			errors["customer"] = "Please select your department.";
		}
		

		if (!departmentName || departmentName=="Select") {
			isValid = false;

			errors["department"] = "Please select your department.";
		}
		
		if (!empName || empName=="Select") {
			isValid = false;

			errors["employee"] = "Please select the employee whom you want to assign the ticket.";
		}
		
		if(!priority)
		{
			isValid=false;
			errors["priority"]="Please select an option"
		}
		if (!message) {
			isValid = false;

			errors["message"] = "Message field cannot be blank.";
		}
		

		setErrors(errors);

		return isValid;
	}
	
	const handleSubmit = () => {
		const formData = {
			customer: customerName,
			department: departmentName,
			priority: priority,
			employees: [{ _id: empName }],
			message: message,
			code: "DCT-" + Math.floor(Math.random() * 100)
		};
		console.log(formData);
		if (validate()) {
		props.handleSubmit(formData);
		alert("Form Submitted");
		}
	};
	return (
		<div>
			<form className="Form">
				<label>
					Customer Name<span className="manda">*</span>
				</label>
				<select
					value={customerName}
					onChange={e => {
						setCustomerName(e.target.value);
						setErrors({})
					}}
				>
					<option>Select</option>
					{customers.map(cust => {
						return (
							<option key={cust._id} value={cust._id}>
								{cust.name}
							</option>
						);
					})}
				</select>
				<span>{errors.customer}</span>

				<br />
				<label>
					Department Name<span className="manda">*</span>
				</label>
				<select
					value={departmentName}
					onChange={e => {setDepartmentName(e.target.value) 
						setErrors({})}}
				>
					<option>Select</option>
					{departmentData.map(dept => {
						return (
							<option key={dept._id} value={dept._id}>
								{dept.name}
							</option>
						);
					})}
				</select>
				<span>{errors.department}</span>

				<br />
				<label>
					Employee Name<span className="manda">*</span>
				</label>
				<select
					value={empName}
					onChange={e => {
						setEmpName(e.target.value);
						setErrors({})
					}}
				>
					<option>Select</option>
					{employeeData
						.filter(emp => {
							return emp.department["_id"] == departmentName;
						})
						.map(empdata => {
							return (
								<option key={empdata._id} value={empdata._id}>
									{empdata.name}
								</option>
							);
						})}
				</select>
				<span>{errors.employee}</span>

				<br />
				<label>
					Priority<span className="manda">*</span>
				</label>
				<div onChange={onChangeValue}>
					<input
						type="radio"
						value="High"
						name="priority"
						checked={priority === "High"}
					/>{" "}
					High
					<input
						type="radio"
						value="Medium"
						name="priority"
						checked={priority === "Medium"}
					/>{" "}
					Medium
					<input
						type="radio"
						value="Low"
						name="priority"
						checked={priority === "Low"}
					/>{" "}
					Low
				</div>
				<span>{errors.priority}</span>

				<label>
					Message<span className="manda">*</span>
				</label>

				<textarea
					placeholder="Enter details of your problem"
					type="text"
					value={message}
					onChange={handleChange}
				/>
				                <span>{errors.message}</span>

				<br />
			</form>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "50%",
					paddingLeft: "30%"
				}}
			>
				<button className="button" onClick={handleSubmit}>
					Submit
				</button>
			</div>
			<br />
		</div>
	);
}
export default TicketForm;
