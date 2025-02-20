import {createSlice} from "@reduxjs/toolkit"

const users = createSlice({
      name:"user",
      initialState:[],
      reducers:{
        addUser(state,action){
          state.push(action.payload); 
        },
        removeUser(state,action){
          state.splice(action.payload,1)
        },
        clearAlluser(state,action){
          return state=[]
        }
      }
})
export default users.reducer;
export const {addUser,removeUser,clearAlluser} =  users.actions;