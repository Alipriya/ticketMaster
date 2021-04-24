import React,{useEffect} from 'react' 
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startSetCustomers,startDeleteCustomer } from '../../Actions/CustomerAction'
function CustomerList(props)
{
    useEffect(()=>{
        
    },[])
    
    function handleRemove(id)
    {
      console.log("check id in remove",id)
     props.dispatch(startDeleteCustomer(id,props))
    }
    return(<div>
     <Link to="/addCustomer">Add Customer</Link>
     
             <table>
                 <thead>
                     <tr>
                         <td>Name</td>
                         <td>Email</td>
                         <td>Mobile</td>
                         <td>Actions</td>
                     </tr>
                 </thead>
                 {props.customers && props.customers.length>0?
                (
                    <tbody>
                      {props.customers.map((cust)=>{
                          return(
                        <tr key={cust._id}>
                            <td><Link to={`/customerShow/${cust._id}`}>{cust.name}</Link></td>
                            <td>{cust.email}</td>
                            <td>{cust.mobile}</td>
                            <td><Link to={`/customersEdit/${cust._id}`}>Edit</Link>
                            <button onClick={()=>{handleRemove(cust._id)}}>Delete</button></td>
                            </tr>)
                      })}
                    </tbody>
                ):null
                    }
            
   </table>
   </div>)
}
const mapStateToProps=(state,id)=>{
    return{
        //customers:state.customers,
        customers:state.customers
    }
}
export default connect(mapStateToProps)(CustomerList)