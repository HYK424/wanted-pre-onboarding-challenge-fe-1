import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "mainCharacter",
  initialState: {
    todo: {
      title: "",
      content: "",
      id: "",
      createdAt: "",
      updatedAt: "",
    },
    list: [
      {
        title: "",
        content: "",
        id: "",
        createdAt: "",
        updatedAt: "",
      },
    ],
  },

  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
    createTodo: (state, action) => {
      state.list.push(action.payload);
    },
    putTodo: (state, action) => {
      const index = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      state.list[index] = action.payload.todo;
    },
    deleteTodo: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload);
      state.list.splice(index, 1);
    },
  },
});

export default todoSlice.reducer;
export const { setList, setTodo, createTodo, putTodo, deleteTodo } =
  todoSlice.actions;
