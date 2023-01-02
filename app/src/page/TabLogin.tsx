import React, { useState } from "react";
import { Box, Container } from "../components/common-styled";
import { TabBox, ContentBox, Tab } from "../components/login/login-styled";
import Login from "../components/login/Login";
import SignUp from "../components/login/SingUp";

const TabLogin = () => {
  const [value, setValue] = useState(0);
  const onClick = (tab: number) => {
    setValue(tab);
  };

  const tabs = [
    {
      name: "로그인",
      content: <Login />,
    },
    {
      name: "회원가입",
      content: <SignUp />,
    },
  ];

  return (
    <Container>
      <Box>
        <TabBox>
          {tabs.map((tab, i) => {
            return (
              <Tab
                key={`${tab.name}-${i}`}
                onClick={() => {
                  onClick(i);
                }}
                active={i === value}
              >
                <p>{tab.name}</p>
              </Tab>
            );
          })}
        </TabBox>
        <ContentBox>{tabs[value].content}</ContentBox>
      </Box>
    </Container>
  );
};

export default TabLogin;
