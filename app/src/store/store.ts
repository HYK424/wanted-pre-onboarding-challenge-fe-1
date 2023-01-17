import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../components/todos/slice/todoSlice";

const store = configureStore({
  reducer: {
    todoSlice,
  },
});

export default store;
export const getState = store.getState();
export type RootState = ReturnType<typeof store.getState>;
