"use client";

import { useSelector } from "react-redux";

import React from "react";
import Profile from "../../../components/profile/Profile";

const page = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ height: "calc(100vh - 15vh)" }}
    >
      {user && <Profile user={user} />}
    </div>
  );
};

export default page;
