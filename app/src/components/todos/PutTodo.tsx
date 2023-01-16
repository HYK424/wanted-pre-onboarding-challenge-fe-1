import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Data, TodoData } from "../../type/todoType";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setList } from "./todoSlice";
import { ContentInput, TitleInput } from "./todos-styled";
import { useForm } from "react-hook-form";
import { get, put } from "../../Api";
const PutTodo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todoSlice.todo);
  const { id } = useParams();
  const { register, watch } = useForm({ mode: "onChange" });

  const handleSubmit = async () => {
    const data: Data = {
      title: watch("title"),
      content: watch("content"),
    };
    const token = localStorage.getItem("login");
    await put( data);
    const res = await get();
    dispatch(setList(res.data));
    navigate("/");
  };

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
