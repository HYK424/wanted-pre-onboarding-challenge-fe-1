import { useQuery } from "react-query";
import { getTodo } from "../Api";
import { queryKey } from "./queryKey";

export const useGetTodoList = () => {
  const { data, isError, isLoading } = useQuery(queryKey.getTodoList, getTodo, {
    staleTime: 5000,
    cacheTime: 25000,
    retry: 1,
  });
  

return {
    todoListArr: data?.data,
    isError: isError,
    isLoading: isLoading
}
};
