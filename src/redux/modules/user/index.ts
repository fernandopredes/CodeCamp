import { createSlice } from "@reduxjs/toolkit";

interface UserState{
  name: string
}

const userReduce = createSlice({
  name:'user',
  initialState:{
    name: ''
  } as UserState,
  reducers:{
    setUser(state, action){
      Object.assign(state, {
        name: action.payload.name
      })
    }
  }
});

export const {setUser} = userReduce.actions;

export default userReduce.reducer;
