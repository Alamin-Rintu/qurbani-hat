"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ClockLoader } from "react-spinners";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  const handleLogOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="border-b border-gray-300 px-3">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Image src={"/quarbani.jpg"} alt="logo" width={50} height={50} />
          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link
              className={`${pathName == "/" ? "border-b border-purple-400 p-2" : ""} text-lg font-medium`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName == "/animals" ? "border-b border-purple-400 p-2" : ""} text-lg font-medium`}
              href="/animals"
            >
              All Animals
            </Link>
          </li>
          <li>
            <Link
              className={`${pathName == "/my-profile" ? "border-b border-purple-400 p-2" : ""} text-lg font-medium`}
              href="/my-profile"
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {isPending ? (
            <ClockLoader size={25} color={"#6510ef"} />
          ) : user ? (
            <>
              <Avatar>
                <Avatar.Image src={user?.image} />
                <Avatar.Fallback>U</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogOut} variant="outline">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">Log In</Link>
              <Link href="/register">Register</Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-4 pb-4">
          <Link href="/">Home</Link>
          <Link href="/animals">All Animals</Link>
          <Link href="/my-profile">My Profile</Link>

          {isPending ? (
            <ClockLoader size={25} color={"#6510ef"} />
          ) : user ? (
            <>
              <div className="flex items-center gap-2">
                <Avatar>
                  <Avatar.Image src={user?.image} />
                </Avatar>
                <span>{user?.name}</span>
              </div>
              <Button onClick={handleLogOut} variant="outline">
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link className="font-medium" href="/login">Log In</Link>
              <Link className="font-medium" href="/register">Register</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
