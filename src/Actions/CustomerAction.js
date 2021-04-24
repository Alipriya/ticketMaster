import axios from 'axios'
//method for displaying list of customers
export const setCustomer=(customers)=>{
    return{
        type:'SET_CUSTOMERS',
        payload:customers
    }
}

export const startSetCustomers=()=>{
    return (dispatch)=>{
        axios.get("https://dct-ticket-master.herokuapp.com/customers",
        {
            headers:{
                'x-auth':localStorage.getItem("token")
            }
        })
        .then((response)=>{
            console.log(response.data)
            const allcustomers=response.data
            dispatch(setCustomer(allcustomers))
        })
    }
}
//method for adding customer
export const addCustomer=(customer)=>{
    return{
        type:"ADD_CUSTOMER",
        payload:customer
    }
}
export const setAddCustomer=(formData,props)=>{
    return(dispatch)=>{
        axios.post("https://dct-ticket-master.herokuapp.com/customers",formData,{
            headers:{
                'x-auth':localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const newCustomer=response.data
            console.log(newCustomer)
            dispatch(addCustomer(newCustomer))
            props.history.push("/customers")
        })
    }
}
//method for editing customer
export const editCustomer=(customer)=>{
    return{
        type:"EDIT_CUSTOMER",
        payload:customer
    }
}
export const setEditCustomer=(id,formData,props)=>{
    return(dispatch)=>{
        axios.put(`https://dct-ticket-master.herokuapp.com/customers/${id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log("checking response of edit",res.data)
            dispatch(editCustomer(res.data))
            props.history.push("/customers")
        })
    }

}

export const deleteCustomer=(id)=>{
    return{
        type:"DELETE_CUSTOMER",
        payload:id
    }
}
export const startDeleteCustomer=(id,props)=>{
    return(dispatch)=>{
        axios.delete(`https://dct-ticket-master.herokuapp.com/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem("token")
            }
        })
        .then((response)=>{
        console.log("check response in action",response.data._id)
         dispatch(deleteCustomer(response.data._id))
        props.history.push("/customers")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}