import React from "react";
import { FieldErrors, FieldValues, useForm } from "react-hook-form";
import { LoginForm, LoginInput } from "./style/login-styled";
import { useNavigate } from "react-router-dom";
import { token } from "../../lib/token";
import { login } from "../../api/Api";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate();
  const onValid = async (data: FieldValues) => {
    try {
      const res = await login(data);
      token(res.data.token).setToken();
      if (token().getToken()) {
        alert("로그인이 완료되었습니다");
        navigate("/");
      } else {
        alert("로그인에 실패하였습니다");
        navigate("/auth");
      }
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
            value: /^[a-zA-Z0-9+-.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
        로그인
      </button>
    </LoginForm>
  );
};

export default Login;
