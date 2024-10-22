import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const getProfile = async (dispatch) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/profile/view`,
    {
      withCredentials: true,
    }
  );
  dispatch(addUser(res?.data));
   
  return res;
};

export const useProfile = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["getProfile"],
    queryFn: () => getProfile(dispatch),
    retry: 0,
  });
};
