import { Header, TitleInput, ContentInput } from "./style/todos-styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setList } from "./slice/todoSlice";
import { useNavigate } from "react-router-dom";
import { getTodo, createTodo } from "../../api/Api";
import { token } from "../../lib/token";

const PostTodo = () => {
  const { register, watch } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      await createTodo({
        title: watch("title"),
        content: watch("content"),
      });
      const { data: todos } = await getTodo();

      dispatch(setList(todos));
    } catch (err) {
      alert("todo 추가 실패");
      console.log(err);
    }
  };

  const logOut = () => {
    token().removeToken();
    navigate("/auth");
  };

  return (
    <>
      <button onClick={logOut}>로그아웃</button>

      <Header>
        <TitleInput placeholder="title" {...register("title")} />
        <ContentInput placeholder="content" {...register("content")} />
        <button type="submit" onClick={handlePost}>
          추가
        </button>
      </Header>
    </>
  );
};

export default PostTodo;
