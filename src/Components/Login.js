import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import {startLocalStorage,getUserDetails} from '../Actions/UserAction'
import { setStartEmployees } from "../Actions/EmployeeAction";
import { startSetCustomers } from "../Actions/CustomerAction";
import { startSetDepartment } from "../Actions/DepartmentAction";
import { set_Start_Tickets } from "../Actions/TicketAction";
function Login(props) {
    const dispatch = useDispatch();
    const users=useSelector((state)=>{
        return state.user
    })
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const handleLogin = e => {
		e.preventDefault();
		const formData = {
			email,
			password
		};
		if (validate()==true ) {
			console.log("login step1")
            //write dispatch here
			dispatch(startLocalStorage(formData,props))
			
				//dispatch(getUserDetails())
				props.history.push("/")
			
			
			//alert("Form Submitted");
		}
		
		//dispatch(setStartUser(formData))
	};
	function validate() {
		let errors = {};

		let isValid = true;

		if (!email) {
			isValid = false;

			errors["email"] = "Please enter your email address.";
		}
		if (!password) {
			isValid = false;
			errors["password"] = "Please enter your password";
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

		setErrors(errors);

		return isValid;
	}
	return (
		<div>
			<h1 style={{ display: "grid", justifyContent: "center", color: "blue" }}>
				Login to the site
			</h1>
			<form className="Form">
				<label>
					Email<span className="manda">*</span>
				</label>
				<input
					type="email"
					value={email}
					onChange={e => {
						setEmail(e.target.value);
						setErrors("");
					}}
				/>
				<span>{errors.email}</span>
				<br />
				<label>
					Password<span className="manda">*</span>
				</label>
				<input
					type="password"
					value={password}
					onChange={e => {
						setPassword(e.target.value);
						setErrors("");
					}}
				/>
				<span>{errors.password}</span>
				<br />
				<button className="button" onClick={handleLogin}>
					Login
				</button>
                {users.error?
            (<h1 style={{color:"red"}}>{users.error}</h1>):<></>   
            }
			</form>
		</div>
	);
}
export default Login;
