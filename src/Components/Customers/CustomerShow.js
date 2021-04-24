import React from 'react'
import {connect} from 'react-redux'
function CustomerShow(props)
{
    return(<div>
        <h1>Customer Name--{props.customer.name}</h1>
        <h1>Customer Email----{props.customer.email}</h1>
        <h1>Customer Mobile---{props.customer.mobile}</h1>
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
