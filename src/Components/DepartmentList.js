import { React, useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
	setDeleteDepartment,
	setAddDepartment,
	startSetDepartment
} from "../Actions/DepartmentAction";
import "../App.css";
function DepartmentList() {
	const [deprtmnt, setDept] = useState("");
    const [errors, setErrors] = useState({});
	let dispatch = useDispatch();
	useEffect(() => {
		dispatch(startSetDepartment())
	}, []);
	let departmentList = useSelector(state => {
		return state.departments;
	});
	const handleRemove = id => {
		dispatch(setDeleteDepartment(id));
	};
	const validate=()=>{
		let errors = {};

		let isValid = true;
		if (!deprtmnt) {
			isValid = false;

			errors["department"] = "Department cannot be empty.";
		}
		setErrors(errors);

		return isValid;
	}
	const handleAdd = deprtmnt => {
		if (validate()) {
		dispatch(setAddDepartment({ name: deprtmnt }));
		}
	};
	return (
		<div>
			<div className="addDepartment">
			<input
				type="text"
				placeholder="Add department"
				value={deprtmnt}
				onChange={e => setDept(e.target.value)}
			/>
			 
			<button
				onClick={() => {
					handleAdd(deprtmnt);
					setDept("");
				}}
			>
				Add
			</button>
			<span style={{color:"red"}}>{errors.department}</span>
			</div>
			
            <div className="departmentList">
			<h1 style={{fontFamily:"sans-serif"}}>Listing Departments -{departmentList.length}</h1>
			<table className="styled-table">
				<thead>
					<tr>
						<th>Department Name</th>
						<th
							style={{
								display: "flex",
								justifyContent: "space-around"
							}}
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{departmentList.map((dept, index) => {
						return (
							<tr key={index}>
								<td>{dept.name}</td>
								<td style={{ display: "flex", justifyContent: "center" }}>
									<button
									    className="button1"
										onClick={() => {
											handleRemove(dept._id);
										}}
									>
										Remove
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
        </div>
	);
}
export default DepartmentList;
