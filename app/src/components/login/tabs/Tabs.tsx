import { Box, Container } from "../../common-styled";
import { TabBox, ContentBox, Tab } from "../style/login-styled";
import useTabs from "../../../hooks/useTabs";
import { TabsArr } from "./TabsArr";

const TabsAuth = () => {
  const { tabNum, changeTabs } = useTabs();

  return (
    <Container>
      <Box>
        <TabBox>
          {TabsArr.map((tab, i) => {
            return (
              <Tab
                key={`${tab.name}-${i}`}
                onClick={() => {
                  changeTabs(i);
                }}
                active={i === tabNum}
              >
                <p>{tab.name}</p>
              </Tab>
            );
          })}
        </TabBox>
        <ContentBox>{TabsArr[tabNum].content}</ContentBox>
      </Box>
    </Container>
  );
};

export default TabsAuth;
