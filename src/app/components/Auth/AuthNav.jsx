"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthNav() {
  const currentPath = usePathname();
  return (
    <>
      <div className="links d-flex gap-5 align-items-center justify-content-center">
        <Link
          href={"/login"}
          className={`link ${currentPath === "/login" ? "active" : ""}`}
        >
          Login
        </Link>
        <Link
          href={"/register"}
          className={`link ${currentPath === "/register" ? "active" : ""}`}
        >
          Register
        </Link>
      </div>
    </>
  );
}
