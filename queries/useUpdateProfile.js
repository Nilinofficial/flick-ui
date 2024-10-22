import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { addUser } from "../slices/userSlice";
import { useDispatch } from "react-redux";

const updateProfile = async (userCredentials, dispatch) => {
  const res = await axios.patch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/profile/update`,
    {
      firstName: userCredentials.firstName,
      lastName: userCredentials.lastName,
      age: userCredentials.age,
      profilePhotoUrl: userCredentials.profilePhotoUrl,
      gender: userCredentials.gender,
      about: userCredentials.about,
    },
    {
      withCredentials: true,
    }
  );
  dispatch(addUser(res?.data?.data));

  return res;
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (userCredentials) => updateProfile(userCredentials, dispatch),
    onSuccess: () => {},
    onError: (err) => {
      console.log(err);
    },
  });
};
