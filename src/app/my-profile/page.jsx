"use client";
import ProfileUpdate from "@/components/ProfileUpdate";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { ClockLoader } from "react-spinners";

const MyProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <ClockLoader size={50} color={"#6510ef"} />
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="flex flex-col items-center gap-4 p-10 w-full max-w-xl rounded-3xl shadow-xl border border-gray-200">
        <div className="relative w-52 h-52">
          <Image
            src={user?.image || "/default-avatar.png"}
            alt={user?.name}
            fill
            className="rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">Name: {user?.name}</h2>
        <p className="text-base text-gray-500">Email: {user?.email}</p>
        <ProfileUpdate />
      </div>
    </div>
  );
};

export default MyProfilePage;
