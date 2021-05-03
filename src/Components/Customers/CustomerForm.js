import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'


function CustomerForm(props)
{
    const [name,setName]=useState(props.customerData?props.customerData.name:"")
    const[email,setEmail]=useState(props.customerData?props.customerData.email:"")
    const[mobile,setMobile]=useState(props.customerData?props.customerData.mobile:"")
    const [isValidate,setIsValidate]=useState(false)
    function handleSubmit(e){
        e.preventDefault()
        const formData={
            name:name,
            email:email,
            mobile:mobile
        }
        if(name!=="" && email!=="" && mobile!=="")
        {
            setIsValidate(true)
        }
        console.log(formData)
      {isValidate?props.handleSubmit(formData):<></>}
    }
    return(<div>
        <form className="Form">
            <label>Customer Name </label>
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <br/>
            <label>Customer Email</label>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <br/>
            <label>Customer Mobile</label>
            <input type="text" name="mobile" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
            <br/>
            <button className="button" onClick={(e)=>handleSubmit(e)}>Submit</button>
        </form>
    </div>)

}
// const mapStateToProps=(state,props)=>{
//     return{
//         customerData:state.customers.find((cust)=>{
//             return cust._id==props.match.params.id
//         })
//     }
// }
export default connect()(CustomerForm)