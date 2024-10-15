"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, external = false }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`transition duration-300 hover:text-zinc-200 ${
        pathname === href ? "text-zinc-100" : "text-zinc-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
