import React, { useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {registerUser} from '../Actions/UserAction'
const Register = (props) => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const dispatch=useDispatch()
	const userError=useSelector((state)=>{
		return state.user
	})
	function validate() {
		let errors = {};

		let isValid = true;

		if (!username) {
			isValid = false;

			errors["username"] = "Please enter your name.";
		}

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

	const handleSubmit = e => {
		e.preventDefault();
		const formData = {
			username,
			email,
			password
		};

		console.log(formData);
		if (validate()) {
			//write dispatch here
            dispatch(registerUser(formData,props))
			
		}
	};
	return (
		<div>
			<h1 style={{ display: "grid", justifyContent: "center", color: "blue" }}>
				Sign up with us
			</h1>
			<form className="Form">
				<label>
					Username <span className="manda">*</span>
				</label>
				<input
					type="text"
					value={username}
					onChange={e => {
						setUsername(e.target.value);
						setErrors("");
					}}
				/>
				<span>{errors.username}</span>
				{userError.errors && userError.errors.username?
				<span>{userError.errors.username.message}</span>:<></>	
				}
				<br />
				<label>
					Email <span className="manda">*</span>
				</label>
				<input
					type="text"
					value={email}
					onChange={e => {
						setEmail(e.target.value);
						setErrors("");
					}}
				/>
				<span>{errors.email}</span>
				{userError.errors && userError.errors.email?
				<span>{userError.errors.email.message}</span>:<></>	
				}
				<br />
				<label>
					Password <span className="manda">*</span>
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
				{userError.errors && userError.errors.password?
				<span>{userError.errors.password.message}</span>:<></>	
				}
				<button className="button" onClick={handleSubmit}>
					Register
				</button>
				
			</form>
		</div>
	);
};
export default Register;
