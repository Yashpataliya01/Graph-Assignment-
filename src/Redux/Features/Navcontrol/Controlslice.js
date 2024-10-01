import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  show : false
}

export const controlSlice = createSlice({
  name: "control",
  initialState,
  reducers:{
    togglesidebar : (state)=>{
      state.show = !state.show;
    }
  }
})


export const { togglesidebar } = controlSlice.actions

export default controlSlice.reducer
