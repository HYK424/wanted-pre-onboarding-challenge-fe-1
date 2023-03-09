import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TT from "./TT";

test("renders", () => {
  render(<TT />); //render함수는 jsx에 대한 가상 DOM을 만든다.
  const linkElement = screen.getByText(/test/i); //screen객체를 통해 가상 DOM에 액세스
  //getByText함수는 정규식을 이용해서 해당하는 text가 컴포넌트에 존재하는지 확인
  expect(linkElement).toBeInTheDocument();
  //toBeInTheDocument()를 사용하기 위해서는 jest-dom을 import해와야 한다
});
