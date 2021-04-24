import {React,useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startSetDepartment,setDeleteDepartment,setAddDepartment} from '../Actions/DepartmentAction'
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
    return(<div>
     <input
        type="text"
        value={deprtmnt}
        onChange={(e)=>setDept(e.target.value)}/>
        <button onClick={()=>{
            handleAdd(deprtmnt)
            setDept("")
        }}>Add</button>
<h1>Listing Departments {departmentList.length}</h1>
<table>
    <thead>
        <tr>
        <th>Name</th>
        <th>Actions</th>
        </tr>
    </thead>
    {
        departmentList.map((dept,index)=>{
            return(<tbody>
                <tr key={index}>
                    <td>{dept.name}</td>
                    <td><button onClick={()=>{handleRemove(dept._id)}}>Remove</button></td>
                </tr>
            </tbody>)
        })
    }
</table>
    </div>)
}
export default DepartmentList