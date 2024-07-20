import Link from "next/link";
import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaRegAddressBook } from "react-icons/fa";

const Header = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-evenly items-center p-10 my-5">
      <div className="order-2 my-4">
        <ul className="flex flex-col items-start gap-2 ">
          <li>
            <BsEnvelope />
            <Link href={"mailto:arafay493@gmail.com"}>Mail</Link>
          </li>
          <li>
            <FaRegAddressBook />
            <Link href="/AbdulRafay__Resume.pdf">Resume</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4 order-1 sm:order-2 my-4">
        <div className="w-[100px] sm:w-[125px] h-[100px] sm:h-[125px] rounded-full overflow-hidden">
          <img src="images/profile.png" alt="" width={"100%"} />
        </div>
        <h5>Abdul Rafay</h5>
      </div>
      <div className="order-3 my-4">
        <ul className="flex flex-col items-start gap-2">
          <li>
            <FaGithub />
            <Link href={"https://github.com/arafay493"} target="_blank">
              Github
            </Link>
          </li>
          <li>
            <FaLinkedin />
            <Link href={""} target="_blank">
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
