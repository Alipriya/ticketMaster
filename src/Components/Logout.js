import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Common/Modal";
import "../App.css";
import { logoutUser } from "../Actions/UserAction";
const Logout = props => {
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logoutUser(props));
	};
	return (
		<div style={{display:"grid",justifyContent:"center"}}>
			<button
				style={{ height: "50px" }}
				className="button"
				onClick={() => setShow(true)}
			>
				Click To Logout
			</button>
			<Modal title="My Modal" onClose={() => setShow(false)} show={show}>
				<p>Are you sure you want to logout?</p>
				<div style={{ display: "flex", justifyContent: "space-around" }}>
					<button onClick={handleLogout}>Yes</button>
					<button onClick={() => setShow(false)}>No</button>
				</div>
			</Modal>
		</div>
	);
};
export default Logout;
