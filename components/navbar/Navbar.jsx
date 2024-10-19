"use client";
import Link from "next/link";
import { useLogOut } from "../../queries/useLogout";

const Navbar = ({ name, photoUrl }) => {
  const { mutate: logout } = useLogOut();

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <Link href="/feeds" className="btn btn-ghost text-xl">
          Flick
        </Link>
      </div>
      <div className="flex-none gap-2">
        <p>Welcome {name}</p>
        <div className="dropdown dropdown-end mx-6">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="profile-photo" src={photoUrl} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li onClick={() => logout()}>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
