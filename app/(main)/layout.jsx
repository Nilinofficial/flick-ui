"use client";

import { useProfile } from "../../queries/useProfile";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MainLayout({ children }) {
  const { refetch } = useProfile();
  const user = useSelector((state) => state.user.user);

  const fetchProfile = async () => {
    await refetch();
  };

  useEffect(() => {
    if (!user) {
      fetchProfile();
    }
  }, [user]);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <section className="">
      <Navbar name={user?.firstName} photoUrl={user?.profilePhotoUrl} />
      {children}
    </section>
  );
}
