import React, {useState} from 'react'
import DeleteAllUsers from './DeleteAllUsers'
import { useDispatch } from 'react-redux'
import DisplayUser from './DisplayUser'
import { addUser } from '../store/slices/UserSlices'
const UserDetails = () => {
    const [data,setData] = useState("");
    const dispatch = useDispatch();
const addnewuser = ()=>
{
    dispatch(addUser(data))
    setData('')
}
  return (
    <>
    <div className='content'>
        <div className='admin-table '>
            <div className='admin-subtitle'> list of Items</div>
            <button className='add_user' onClick={()=>addnewuser()}>Add New Item</button>   
        </div>
        <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}} className=''><input style={{width:"30%",height:"1.5rem"}} placeholder='Entre your items' value={data} onChange={(e)=>     
            {
                setData(e.target.value)
            }
        }  type="text"/></div>
        <ul className='ui'>
            <li><DisplayUser/></li>  
        </ul>
        <hr/>
        <DeleteAllUsers/>
    </div>
    </>
  )
}
export default UserDetails