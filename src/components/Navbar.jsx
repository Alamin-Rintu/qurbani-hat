"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b border-gray-300 px-2">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image
            src={"/quarbani.jpg"}
            alt="logo"
            loading="eager"
            width={60}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/animals"}>All Animals</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-3 text-sm">
            <li>
              <Link href={"/login"}>Log In</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
