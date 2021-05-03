import {React,useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startSetDepartment,setDeleteDepartment,setAddDepartment} from '../Actions/DepartmentAction'
import "../App.css"
function DepartmentList()
{
    const[deprtmnt,setDept]=useState("")

    let dispatch=useDispatch()
    useEffect(()=>{
    
    },[])
    let departmentList=useSelector((state)=>{
    return state.departments
    })
   const handleRemove=(id)=>{
        dispatch(setDeleteDepartment(id))
    }
    const handleAdd=(deprtmnt)=>{
        dispatch(setAddDepartment({name:deprtmnt}))
        
    }
    return(<div className="departmentList">
     <input
        type="text"
        value={deprtmnt}
        onChange={(e)=>setDept(e.target.value)}/>
        <button onClick={()=>{
            handleAdd(deprtmnt)
            setDept("")
        }}>Add</button>
<h1>Listing Departments {departmentList.length}</h1>
<table className="styled-table">
    <thead>
        <tr>
        <th>Name</th>
        <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {
        departmentList.map((dept,index)=>{
            return(
                <tr key={index}>
                    <td>{dept.name}</td>
                    <td><button onClick={()=>{handleRemove(dept._id)}}>Remove</button></td>
                </tr>
            )
        })
    }
    </tbody>
</table>
    </div>)
}
export default DepartmentList