import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addFeedUser } from "../slices/feedUserSlice";

const getUsers = async (dispatch) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/user/feed`, {
    withCredentials: true,
  });
  dispatch(addFeedUser(res.data.data));
  return res;
};

export const useUsers = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers(dispatch),
  });
};
