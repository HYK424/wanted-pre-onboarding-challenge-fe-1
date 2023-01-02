import { Box, Container } from "../components/common-styled";
import PostTodo from "../components/todos/PostTodo";
import Todos from "../components/todos/TodoList";

const TodoList = () => {
  return (
    <Container>
      <Box>
     
        <PostTodo />
        <Todos />
      </Box>
    </Container>
  );
};

export default TodoList;
