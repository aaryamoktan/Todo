import React from 'react'
import { useSelector } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from 'react-redux'
import {removeUser} from "../store/slices/UserSlices"
const DisplayUser = () => {
    const dispatch = useDispatch();
    
    const data = useSelector((state)=>
    {
        return state.user;
    })
    const deleteuser = (id)=>
    {
        dispatch(removeUser(id))
    }
  return (
    <>
    {
        data.map((user,id)=>
        {
          const data = user.charAt(0).toUpperCase() + user.slice(1);
            return(
            <li key={id} style={{display:"flex", alignItems:"center", justifyConten:"space-around"}}>
              <div className='' style={{width:"50%",textAlign:"center",marginRight:"30%"}}> {data}</div> 
              <div className='' style={{width:"50%"}}> <button style={{border:"none",fontSize:"30px "}} onClick={()=>deleteuser(id)}><MdDeleteForever style={{color:"red" ,width:"100%"}}/></button></div>
               
            </li>
            )
        })
    }
    </>
  )
}

export default DisplayUser