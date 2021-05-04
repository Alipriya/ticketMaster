import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Employee from '../Employee.jpeg'
function EmployeeForm(props)
{
   
    const [name,setName]=useState(props.employee?props.employee.name:"")
    const [email,setEmail]=useState(props.employee?props.employee.email:"")
    const [mobile,setMobile]=useState(props.employee?props.employee.mobile:"")
    const [department,setDepartment]=useState(props.employee?props.employee.department._id:"")
    
let departmentsdata=useSelector((state)=>{
    return state.departments
})
useEffect(()=>{

},[])
const handleSubmit=(e)=>{
e.preventDefault()
const formData={
    name:name,
    email:email,
    mobile:mobile,
    department:department
}
console.log("check formData",formData)
props.handleSubmit(formData)


}
    
    return(<div>
      <form className="Form" style={{background:Employee,backgroundSize: "cover"}}>
          <label>Name<span className="manda">*</span></label>
          <input placeholder="Enter employee name" type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <br/>
          <label>Email<span className="manda">*</span></label>
          <input type="text" placeholder="Enter employee email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          <label>Mobile<span className="manda">*</span></label>
          <input type="text" placeholder="Enter employee mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
          <br/>
          <label>Department<span className="manda">*</span></label>
          <select value={department} onChange={(e)=>setDepartment(e.target.value)}>
          <option>Select</option>
          {departmentsdata.map((dept)=>{
          return  <option key={dept._id} value={dept._id}>{dept.name}</option>
          })}
          </select>
          <br/>
          <button className="button" onClick={(e)=>handleSubmit(e)}>Submit</button>
          <br/>
    </form>  
    </div>)
}
export default EmployeeForm