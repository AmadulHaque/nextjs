"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuLink = () => {
  const currentPath = usePathname();

  return (
    <>
      <div className="menu d-flex gap-4">
        <Link
          href={"/"}
          className={`item ${currentPath === "/" ? "active" : ""}`}
        >
          Home
        </Link>
        <Link
          href={"/product"}
          className={`item ${currentPath === "/product" ? "active" : ""}`}
        >
          Product
        </Link>
        <Link
          href={"/about"}
          className={`item ${currentPath === "/about" ? "active" : ""}`}
        >
          About
        </Link>
        <Link
          href={"/contact"}
          className={`item ${currentPath === "/contact" ? "active" : ""}`}
        >
          Contact
        </Link>
      </div>
    </>
  );
};
