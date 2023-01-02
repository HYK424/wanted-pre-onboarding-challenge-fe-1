import React from "react";
import { Routes, Route } from "react-router-dom";
import TabLogin from "./page/TabLogin";
import Todo from "./page/Todo";
import TodoList from "./page/TodoList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoList />} />
      <Route path="/auth" element={<TabLogin />} />
      <Route path="/todo/:id" element={<Todo />} />
    </Routes>
  );
}

export default App;
