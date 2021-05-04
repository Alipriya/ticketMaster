import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

function CustomerForm(props) {
	const [name, setName] = useState(
		props.customerData ? props.customerData.name : ""
	);
	const [email, setEmail] = useState(
		props.customerData ? props.customerData.email : ""
	);
	const [mobile, setMobile] = useState(
		props.customerData ? props.customerData.mobile : ""
	);
	const [errors, setErrors] = useState({});

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

	function handleSubmit(e) {
		e.preventDefault();
		const formData = {
			name: name,
			email: email,
			mobile: mobile
		};

		console.log(formData);
		if (validate()) {
			props.handleSubmit(formData);
			alert("Form Submitted");
		}
	}
	return (
		<div>
			<form className="Form">
				<label>
					Customer Name <span className="manda">*</span>
				</label>
				<input
					placeholder="Enter customer name"
					type="text"
					name="name"
					value={name}
					required
					onChange={e => {
						setName(e.target.value);
						setErrors({});
					}}
				/>
				<span>{errors.name}</span>

				<br />
				<label>
					Customer Email <span className="manda">*</span>
				</label>
				<input
					placeholder="Enter customer email"
					type="email"
					name="email"
					value={email}
					required
					onChange={e => {
						setEmail(e.target.value);
						setErrors({});
					}}
				/>
				<span>{errors.email}</span>
				<br />
				<label>
					Customer Mobile <span className="manda">*</span>
				</label>
				<input
					placeholder="Enter customer mobile"
					type="text"
					name="mobile"
					value={mobile}
					onChange={e => {
						setMobile(e.target.value);
						setErrors({});
					}}
				/>
				<span>{errors.mobile}</span>
				<br />
				<button className="button" onClick={e => handleSubmit(e)}>
					Submit
				</button>
			</form>
		</div>
	);
}
// const mapStateToProps=(state,props)=>{
//     return{
//         customerData:state.customers.find((cust)=>{
//             return cust._id==props.match.params.id
//         })
//     }
// }
export default connect()(CustomerForm);
