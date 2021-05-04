import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Employee from "../Employee.jpeg";
function EmployeeForm(props) {
	const [name, setName] = useState(props.employee ? props.employee.name : "");
	const [email, setEmail] = useState(
		props.employee ? props.employee.email : ""
	);
	const [mobile, setMobile] = useState(
		props.employee ? props.employee.mobile : ""
	);
	const [department, setDepartment] = useState(
		props.employee ? props.employee.department._id : ""
	);
	const [errors, setErrors] = useState({});
	let departmentsdata = useSelector(state => {
		return state.departments;
	});
	useEffect(() => {}, []);
	function validate() {
		let errors = {};

		let isValid = true;

		if (!name) {
			isValid = false;

			errors["name"] = "Please enter your name.";
		}

		if (!email) {
			isValid = false;

			errors["email"] = "Please enter your email Address.";
		}
		if (!department || department=="Select") {
			isValid = false;

			errors["department"] = "Please select your department.";
		}
		if (!mobile) {
			isValid = false;

			errors["mobile"] = "Please enter your mobile number.";
		}

		if (typeof email !== "undefined" && email !== "") {
			var pattern = new RegExp(
				/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
			);

			if (!pattern.test(email)) {
				isValid = false;

				errors["email"] = "Please enter valid email address.";
			}
		}

		if (typeof mobile !== "undefined" && mobile !== "") {
			var pattern = new RegExp(/^[0-9\b]+$/);

			if (!pattern.test(mobile)) {
				isValid = false;

				errors["mobile"] = "Please enter only number.";
			} else if (mobile.length != 10) {
				isValid = false;

				errors["mobile"] = "Please enter valid phone number.";
			}
		}

		setErrors(errors);

		return isValid;
	}
	const handleSubmit = e => {
		e.preventDefault();
		const formData = {
			name: name,
			email: email,
			mobile: mobile,
			department: department
		};
        console.log("check formData", formData);
        if (validate()) {
        props.handleSubmit(formData);
        alert("Form Submitted");
		}
	};

	return (
		<div>
			<form
				className="Form"
				style={{ background: Employee, backgroundSize: "cover" }}
			>
				<label>
					Name<span className="manda">*</span>
				</label>
				<input
					placeholder="Enter employee name"
					type="text"
					value={name}
					onChange={e => {
                        setName(e.target.value);
                        setErrors({})
					}}
				/>
                <span>{errors.name}</span>
				<br />
				<label>
					Email<span className="manda">*</span>
				</label>
				<input
					type="text"
					placeholder="Enter employee email"
					value={email}
					onChange={e => {
                        setEmail(e.target.value);
                        setErrors({})
					}}
				/>
                <span>{errors.email}</span>
				<br />
				<label>
					Mobile<span className="manda">*</span>
				</label>
				<input
					type="text"
					placeholder="Enter employee mobile"
					value={mobile}
					onChange={e => {
                        setMobile(e.target.value);
                        setErrors({})
					}}
				/>
                <span>{errors.mobile}</span>
				<br />
				<label>
					Department<span className="manda">*</span>
				</label>
				<select
					value={department}
                    onChange={e => {
                        setDepartment(e.target.value)
                        setErrors({})
                    }}
				>
					<option>Select</option>
					{departmentsdata.map(dept => {
						return (
							<option key={dept._id} value={dept._id}>
								{dept.name}
							</option>
						);
					})}
				</select>
                {console.log("check error",errors)}
                <span>{errors.department}</span>
				<br />
				<button className="button" onClick={e => handleSubmit(e)}>
					Submit
				</button>
				<br />
			</form>
		</div>
	);
}
export default EmployeeForm;
