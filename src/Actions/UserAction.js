import axios from 'axios'
//register user

import { setStartEmployees } from "../Actions/EmployeeAction";
import { startSetCustomers } from "../Actions/CustomerAction";
import { startSetDepartment } from "../Actions/DepartmentAction";
import { set_Start_Tickets } from "../Actions/TicketAction";

export const setRegister=(error)=>{
    return{
        type:"REGISTER",
        payload:error
    }
}
export const registerUser=(formData)=>{
    return (dispatch)=>{
        axios.post("https://dct-ticket-master.herokuapp.com/users/register",formData)
       .then((response)=>{
        console.log("check response in register",response.data)
        dispatch(setRegister(response.data))
        //props.history.push("/users/login")
       })
       .catch((err)=>{
           console.log(err)
       })
    }
}
//after login
export const loginUser=(error)=>{
    return{
        type:"LOGIN",
        payload:error
    }
}
export const startLocalStorage=(formData,props)=>{
    return(dispatch)=>{
     axios.post("https://dct-ticket-master.herokuapp.com/users/login",formData)
     .then((response)=>{
       console.log("inside setting localStorage",response.data)
       const {token}=response.data
       localStorage.setItem("token",token)
       dispatch(loginUser(response.data))
       if(localStorage.getItem("token")!=="undefined")
       {
           alert("You are successfully logged in")
           props.history.push("/")
           dispatch(startSetCustomers());
		dispatch(setStartEmployees());
		dispatch(startSetDepartment());
		dispatch(set_Start_Tickets());
       }
       else{
           props.history.push("/users/login")
       }
       //props.history.push("/")
     })
     .catch((err)=>{
         console.log(err)
     })
    }
}
//get user details after logging in
export const getUser=(user)=>{
    return{
        type:"GET_USER",
        payload:user
    }
    }
export const getUserDetails=()=>{
return (dispatch)=>{
    axios.get("https://dct-ticket-master.herokuapp.com/users/account",{
        headers:{
            "x-auth":localStorage.getItem("token")
        }
    })
    .then((response)=>{
        console.log("check",response.data)
        dispatch(getUser(response.data))
        
    })
    .catch((err)=>{
        console.log(err)
    })
}

}
//logout
export const setLogout=(user)=>{
    return{
      type:'LOGOUT',
      payload:user
    }
}
export const logoutUser=(props)=>{
    return(dispatch)=>{
        axios.delete("https://dct-ticket-master.herokuapp.com/users/logout",{
            headers:{
                "x-auth":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            console.log("check response from logout",response.data)
            if(response.data)
            {
                localStorage.clear()
                dispatch(setLogout(response.data))
               props.history.push("/users/login")
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}