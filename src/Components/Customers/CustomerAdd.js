import React from 'react'
import {connect} from 'react-redux'
import CustomerForm from './CustomerForm'
import {setAddCustomer} from '../../Actions/CustomerAction'
function CustomerAdd(props)
{
const handleSubmit=(formData)=>{
props.dispatch(setAddCustomer(formData,props))
}
return(<CustomerForm handleSubmit={handleSubmit}/>)
}
export default connect()(CustomerAdd)