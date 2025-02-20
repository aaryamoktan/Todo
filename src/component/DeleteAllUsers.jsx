import React from 'react'
import { useDispatch } from 'react-redux'
import { clearAlluser } from '../store/slices/UserSlices';
const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const DeleteAllUsers = ()=>
  {
    dispatch(clearAlluser())
  }
  return (
    <div className='' style={{display:"flex",justifyContent:"center"}}>
      <button className='Delete_user' style={{width:"150px",height:"4vh",fontSize:"20px",borderRadius:"20px",cursor:"pointer",border:"none",color:"white"}} onClick={()=>DeleteAllUsers()}>Clear-All-Data</button>
    </div>
  )
}

export default DeleteAllUsers