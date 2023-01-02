import styled, { css } from 'styled-components';

export const TabBox = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1.5px solid #e1e2e4;
  width: 500px;
  margin-bottom: 20px;
  padding: 0px;
`;

export const ContentBox = styled.div`
  padding-bottom: 220px;
`;

export const Tab = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  line-height: 10px;
  width: 50%;
  padding: 10px;

  ${(props) =>
    props.active &&
    css`
      color: #524fa1;
      font-weight: bold;
      box-shadow: inset 0px -3px 0px #524fa1;
    `}
`;
export const LoginInput = styled.input`
  height: 22px;
  width: 320px;
  background-color: #f2faff;
  border: 1px solid #c9cacc;
  border-radius: 8px;
  outline: 1.5px solid #b2afca;
  padding: 13px;
  font-size: 22px;
  &:focus {
    background-color: #c8d0e6;
    outline: none;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  height: 300px;
  display: flex;
  position: relative;
  flex-direction: column;
  & > label {
    font-size: 20px;
    margin-top: 11px;
    margin-bottom: 5px;
  }
  & > Button {
    margin-top: 40px;
  }
`;