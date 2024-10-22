"use client";

import { useSelector } from "react-redux";
import { useUsers } from "../../../queries/useUsers";
import { useEffect } from "react";
import Feeds from "../../../components/feeds/Feeds";

const page = () => {
  const { refetch } = useUsers();
  const users = useSelector((state) => state.feedUser.feedUser);
  console.log(users);

  const fetchUsers = async () => {
    await refetch();
  };

  useEffect(() => {
    fetchUsers();
  }, [users]);

  if (!users) return <div>no users found in feed...</div>;

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ height: "calc(100vh - 15vh)" }}
    >
      {users.map((feeduser) => (
        <Feeds {...feeduser} key={feeduser._id} />
      ))}
    </div>
  );
};

export default page;
