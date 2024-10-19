import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { removeUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const logOutUser = async (dispatch) => {
  await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
    {},
    {
      withCredentials: true,
    }
  );
  await dispatch(removeUser());
};

export const useLogOut = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: () => logOutUser(dispatch),
    onSuccess: () => {
      router.push("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
