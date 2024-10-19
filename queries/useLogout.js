import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const logOutUser = async () => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`
  );
  return response.data;
};

export const useLogOut = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      router.push("/login");
      console.log("logged out");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
