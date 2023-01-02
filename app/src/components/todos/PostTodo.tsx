import { Header, TitleInput, ContentInput } from "./todos-styled";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setList } from "./todoSlice";
import { useNavigate } from 'react-router-dom';
import { get, post } from "../../Api";

const PostTodo = () => {
  const { register, watch } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const handlePost = async () => {
    const data = {
      title: watch("title"),
      content: watch("content"),
    };
    
    try {
      await post('',data)
      const res=await get();
      dispatch(setList(res.data));
    } catch (err) {
      alert("todo 추가 실패");
      console.log(err);
    }
  };

const logOut=()=>{
  localStorage.removeItem('login');
  navigate('/auth');
}

  return (
    <>
         <button onClick={logOut}>
          로그아웃
        </button>
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
