import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const logOutUser = async () => {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`,
    {},
    {
      withCredentials: true,
    }
  );
};

export const useLogOut = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      router.push("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
