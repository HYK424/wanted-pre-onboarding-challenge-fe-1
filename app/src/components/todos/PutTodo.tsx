import { useParams } from "react-router-dom";
import { Data } from "../../type/todoType";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setList } from "./slice/todoSlice";
import { ContentInput, TitleInput } from "./style/todos-styled";
import { useForm } from "react-hook-form";
import { getTodo, putTodo } from "../../api/Api";
const PutTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todoSlice.todo);
  const { id } = useParams();
  const { register, watch } = useForm({ mode: "onChange" });

  const handleSubmit = async () => {
    const Todo: Data = {
      title: watch("title"),
      content: watch("content"),
    };
    // const token = localStorage.getItem("login");
    await putTodo(id, Todo);
    const res = await getTodo();
    dispatch(setList(res.data));
    navigate("/");
  };

  // const queryClient = useQueryClient();
  // console.log(queryClient.getQueryData(queryKey.getTodoList));
  //키 값을 이용해 전역state로 저장된 query data에 접근. 캐시가 비어있는 경우 undifined가 되므로 추천하지 않는다.
  // const { todoListArr, isError, isLoading } = useGetTodoList();
  //   console.log('/ 에서 이미 실행됨',todoListArr);
  //한 컴포넌트에서 사용한 useQuery를 다른 곳에서 사용한다고 다시 api를 요청하지는 않는다. 같은 쿼리 키를 공유하고 있으므로 캐시에 저장된 데이터를 사용.
  //물론 stale한 상태가 되면 refetching.

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <TitleInput
        type="text"
        defaultValue={todo?.title}
        {...register("title")}
      />
      <ContentInput
        type="text"
        defaultValue={todo?.content}
        {...register("content")}
      />
      <button type="submit" onClick={handleSubmit}>
        수정
      </button>
      <button type="button" onClick={handleCancel}>
        취소
      </button>
    </>
  );
};

export default PutTodo;
