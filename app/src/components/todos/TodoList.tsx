import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setList, setTodo } from "./slice/todoSlice";
import { useNavigate } from "react-router-dom";
import { TodoData } from "../../type/todoType";
import { deleteTodo, getTodo, getTodoById } from "../../Api";

const Todos = () => {
  const todoList = useSelector((state: RootState) => state.todoSlice.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getTodoList();
  }, []);

  const getTodoList = async () => {
    const res = await getTodo();
    dispatch(setList(res.data));
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    const res = await getTodo();
    dispatch(setList(res.data));
  };

  const handlePut = async (id: string) => {
    const res = await getTodoById(id);
    dispatch(setTodo(res.data));
    navigate(`/todo/${id}`);
  };

  return (
    <div>
      {todoList.map((item: TodoData) => {
        return (
          <div key={item.id} style={{ display: "flex" }}>
            <p>{item.title}</p>

            <button
              type="button"
              onClick={() => {
                handlePut(item.id);
              }}
            >
              수정
            </button>

            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
