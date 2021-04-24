import axios from 'axios'
export const setDepartment=(department)=>{
    return{
        type:"SET_DEPARTMENT",
        payload:department
    }
}
export const startSetDepartment=()=>{
return (dispatch)=>{
    axios.get("https://dct-ticket-master.herokuapp.com/departments",{
        headers:{
            'x-auth':localStorage.getItem("token")
        }
    })
    .then((response)=>{
        let departmentData=response.data
        dispatch(setDepartment(departmentData))
    })
}
}

export const deleteDepartment=(id)=>{
return{
    type:"DELETE_DEPARTMENT",
    payload:id
}
}
export const setDeleteDepartment=(id)=>{
    return (dispatch)=>{
   axios.delete(`https://dct-ticket-master.herokuapp.com/departments/${id}`,{
       headers:{
           "x-auth":localStorage.getItem("token")
       }
   })
   .then((response)=>{
       dispatch(deleteDepartment(response.data._id))
   })
    }

    
}
export const addDepartment=(department)=>{
    return{
        type:"ADD_DEPARTMENT",
        payload:department
    }
}
export const setAddDepartment=(departmentData)=>{
    return (dispatch)=>{
        console.log("checking department data",departmentData)
        axios.post("https://dct-ticket-master.herokuapp.com/departments",departmentData,{
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            const dept=response.data
            console.log("checking response",dept)
            dispatch(addDepartment(dept))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}