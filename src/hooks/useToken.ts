import { useAppSelector } from "../store/store";

export const useToken = () => {
  const { userToken } = useAppSelector((state) => state.auth);
  return userToken;
};
