import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./page/auth/Auth";
import Todo from "./page/todo/Todo";
import TodoList from "./page/todoList/TodoList";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from 'react-query/devtools'
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}

export default App;
