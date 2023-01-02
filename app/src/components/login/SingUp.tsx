import React from "react";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { LoginForm, LoginInput } from "./login-styled";
import axios from "axios";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });


  const onValid = async (data: FieldValues) => {
    try {
      const res = await axios.post("http://localhost:8080/users/create", data);
      localStorage.setItem("login", res.data.token);
      alert("회원가입이 완료되었습니다");
    } catch (err) {
      alert(data);
    }
  };

  const onInvalid = (errors: FieldErrors) => {
    alert("실패");
    console.log(errors);
  };

  return (
    <LoginForm onSubmit={handleSubmit(onValid, onInvalid)}>
      <label htmlFor="Email" style={{ display: "block" }}>
        Email{" "}
      </label>
      <LoginInput
        type="text"
        id="Email"
        {...register("email", {
          required: "Email을 입력해 주세요",
          pattern: {
            value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Email형식에 맞춰서 입력해 주세요",
          },
        })}
      />
      {errors.email && <p>{`${errors.email?.message}`}</p>}

      <label htmlFor="Password" style={{ display: "block" }}>
        Password{" "}
      </label>
      <LoginInput
        type="password"
        id="Password"
        {...register("password", {
          required: "Password를 입력해 주세요",
          minLength: {
            value: 8,
            message: "8글자 이상으로 입력해 주세요",
          },
        })}
      />
      {errors.password && <p>{`${errors.password?.message}`}</p>}

      <button type="submit" disabled={!isDirty || !isValid}>
        회원가입
      </button>
    </LoginForm>
  );
};

export default SignUp;
