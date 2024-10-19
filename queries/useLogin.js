import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const loginUser = async (userCredentials) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
    {
      email: userCredentials.email,
      password: userCredentials.password,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (userCredentials) => loginUser(userCredentials),
    onSuccess: () => {
      router.push("/");
      console.log("success");
    },
    onError: (err) => {
      console.log(err);
    },
  });
};
