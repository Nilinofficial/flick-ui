"use client";

import { useProfile } from "../../queries/useProfile";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashboardLayout({ children }) {
  const { refetch } = useProfile();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const fetchProfile = async () => {
    await refetch();
  };

  useEffect(() => {
    if (!user) {
      fetchProfile();
    }
  }, []);

  return (
    <section className="">
      <Navbar name={user?.firstName} photoUrl = {user?.profilePhotoUrl}/>
      {children}
    </section>
  );
}
