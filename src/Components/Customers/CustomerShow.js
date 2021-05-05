import React from 'react'
import {connect} from 'react-redux'
function CustomerShow(props)
{
    return(<div className="Form">
        <h1 style={{color:"blue"}}>Customer Details</h1>
        <h1>Customer Name: <span style={{color:"blue"}}>{props.customer.name}</span></h1>
        <h1>Customer Email: <span style={{color:"blue"}}>{props.customer.email}</span></h1>
        <h1>Customer Mobile: <span style={{color:"blue"}}>{props.customer.mobile}</span></h1>
    </div>)

}
const mapStateToProps=(state,props)=>{
console.log(props)
return{
customer:state.customers.find((cust)=>{
    return cust._id==props.match.params.id
})
}
}
export default connect(mapStateToProps)(CustomerShow)
