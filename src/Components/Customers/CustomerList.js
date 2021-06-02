import React,{useEffect} from 'react' 
import {connect,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { startSetCustomers,startDeleteCustomer } from '../../Actions/CustomerAction'
import "../../App.css"
function CustomerList(props)
{
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startSetCustomers());
    },[])
    
    function handleRemove(id)
    {
      console.log("check id in remove",id)
     props.dispatch(startDeleteCustomer(id,props))
    }
    return(<div className="customerList">
        <h1 style={{fontFamily:"sans-serif"}}>Customer List -{props.customers.length}</h1>
     <Link to="/addCustomer">Add Customer</Link>
     
             <table className="styled-table">
                 <thead>
                     <tr>
                         <td>Customer Name</td>
                         <td>Customer Email</td>
                         <td>Customer Mobile</td>
                         <td className="ActionTitle">Actions</td>
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
                            <td
                            className="Actions"
                            ><Link to={`/customersEdit/${cust._id}`}>Edit</Link>
                            <button className="button1" onClick={()=>{handleRemove(cust._id)}}>Delete</button>
                            </td>
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