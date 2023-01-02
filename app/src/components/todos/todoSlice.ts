import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
  name: 'mainCharacter',
  initialState: {
    todo: {
      title: "",
      content: "",
      id: "",
      createdAt: "",
      updatedAt: ""
  },
    list: [{
        title: "",
        content: "",
        id: "",
        createdAt: "",
        updatedAt: ""
    }]
  },

  reducers: {
    setList: (state, action ) => {
      state.list = action.payload;
    },
    setTodo: (state, action ) => {
      state.todo= action.payload;
    },
  },
});

export default todoSlice.reducer;
export const { setList, setTodo } = todoSlice.actions;
