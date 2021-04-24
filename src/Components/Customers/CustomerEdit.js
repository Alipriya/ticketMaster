import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import CustomerForm from './CustomerForm'
import {setEditCustomer} from '../../Actions/CustomerAction'
function CustomerEdit(props)
{
    let dispatch=useDispatch()
    let customerData1=useSelector((state)=>{
       return state.customers.find((cust)=>{
            return cust._id==props.match.params.id
        }) 
    })
    const handleEdit=(formData)=>{
        const id=props.match.params.id
        dispatch(setEditCustomer(id,formData,props)) 
    }
    return(<CustomerForm customerData={customerData1} handleSubmit={handleEdit}/>)
    
}

export default CustomerEdit