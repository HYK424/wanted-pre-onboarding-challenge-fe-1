import { useState } from "react";

const useTabs = () => {
  const [tabNum, setTabNum] = useState(0);
  const changeTabs = (tab: number) => {
    setTabNum(tab);
  };

  return { tabNum, changeTabs };
};

export default useTabs;
