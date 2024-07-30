"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { sidebar_menu } from "@/app/components/common/Sidebar";
import ProfileIcon from "../Elements/Icons/ProfileIcon";
import DockIcon from "../Elements/Icons/DockIcon";
const UserSidebar = ({ ToggleSidebar }) => {
  const { user, logout } = useAuth();

  const pathname = usePathname();
  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    window.location.href = "/";
  };


 
  return (
    <>
      <ul className="navbar-nav sidebarMenu d-flex  ">
        {sidebar_menu
          .filter(function (item) {
            return item.role === user?.data?.role_name;
          })
          .map((menu, index) => (
            <li key={index} className="nav-item" onClick={ToggleSidebar}>
              <Link
                href={menu.url}
                className={`nav-link ${pathname === menu.url ? "active" : ""}`}
              >
                {menu.icon}
                {menu.title}
              </Link>
            </li>
          ))}
          {
            user.message=="Approved" || user.message=="Pending" ? 
            <li className="nav-item" onClick={ToggleSidebar}>
              <Link
                href="/user/doc"
                className={`nav-link ${pathname === "/user/doc" ? "active" : ""}`}
              >
                <DockIcon />
                <div className="dock title position-relative">
                  <p> My doc</p>
                  <span className={`badge  ${user.message=="Approved" ? "text-bg-success" : "text-bg-warning" } `}>{user.message}</span>
                </div>
              </Link>
            </li>
            :
            <li className="nav-item" onClick={ToggleSidebar}>
              <Link href="/user/becomeadealer" className={`nav-link ${ pathname === "/user/becomeadealer" ? "active" : "" }`} >
                <ProfileIcon />
                Become a dealer
              </Link>
            </li>
          }




        <li className="nav-item">
          <button onClick={() => handleLogout()} className="nav-link">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="logout"
                d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373V11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501"
                stroke="#475569"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                className="logout"
                d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5"
                stroke="#475569"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Logout
          </button>
        </li>
      </ul>
    </>
  );
};

export default UserSidebar;
