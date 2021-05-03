import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
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
      <form className="Form">
          <label>Name</label>
          <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
          <br/>
          <label>Email</label>
          <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          <br/>
          <label>Mobile</label>
          <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
          <br/>
          <label>Department</label>
          <select value={department} onChange={(e)=>setDepartment(e.target.value)}>
          <option>Select</option>
          {departmentsdata.map((dept)=>{
          return  <option key={dept._id} value={dept._id}>{dept.name}</option>
          })}
          </select>
          <br/>
          <button onClick={(e)=>handleSubmit(e)}>Submit</button>
          <br/>
    </form>  
    </div>)
}
export default EmployeeForm