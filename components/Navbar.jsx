import { navlinks } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <section className="p-5">
      <ul className="flex justify-evenly">
        {navlinks.map((navlink, index) => (
          <li key={index}>
            <Link
              href={navlink.href}
              className={router.route === navlink.href ? "text-[#B86CF9]" : ""}
            >
              {navlink.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Navbar;
