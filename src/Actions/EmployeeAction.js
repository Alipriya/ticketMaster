import axios from "axios"

export const setEmployees=(employee)=>{
    return{
        type:"SET_EMPLOYEES",
        payload:employee
    }
}
export const setStartEmployees=()=>{
    return (dispatch)=>{
        axios.get("https://dct-ticket-master.herokuapp.com/employees",{
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const employee=response.data
            dispatch(setEmployees(employee))
        })
    }
}
export const setAddEmployee=(employee)=>{
    return{
        type:"ADD_EMPLOYEE",
        payload:employee
    }
}
export const startAddEmployee=(formData,props)=>{
    return(dispatch)=>{
        axios.post("https://dct-ticket-master.herokuapp.com/employees",formData,{
            headers:{
                'x-auth':localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const employee=response.data
            console.log(employee)
            dispatch(setAddEmployee(employee))
            props.history.push("/employees")
        })
    }
}
export const editEmployees=(employee)=>{
    return{
     type:"EDIT_EMPLOYEES",
     payload:employee
    }
}
export const startEditEmployees=(id,formData,props)=>{
    return(dispatch)=>{
        axios.put(`https://dct-ticket-master.herokuapp.com/employees/${id}`,formData,
        {
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const employee=response.data
            dispatch(editEmployees(employee))
            props.history.push("/employees")
        })
    }
}
export const deleteEmployee=(id)=>{
    return{
        type:"DELETE_EMPLOYEE",
        payload:id
    }
}
export const setDeleteEmployee=(id)=>{
    return(dispatch)=>{
    axios.delete(`https://dct-ticket-master.herokuapp.com/employees/${id}`,{
        headers:{
            "x-auth":localStorage.getItem("token")
        }
    })
    .then((response)=>{
        const empId=response.data._id
        console.log("check response",empId)
        dispatch(deleteEmployee(empId))
        
    })
    .catch((err)=>{
        console.log(err)
    })
    }
}

