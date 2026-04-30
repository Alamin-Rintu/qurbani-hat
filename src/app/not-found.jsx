"use client";

import { Button } from "@heroui/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-2">
      <DotLottieReact
        src="https://lottie.host/f330cf34-3d1f-45d6-a86e-38ab7f8147bf/LnQW8Wg22o.lottie"
        loop
        autoplay
        style={{ width: "300px", height: "300px" }}
      />

      <h1 className="text-2xl font-bold mt-4">404 - Page Not Found</h1>
      <p className="text-gray-500">Oops! This page doesn’t exist.</p>
      <Link href={'/'}><Button variant="danger"><IoArrowBackCircleSharp /> Back To Home</Button></Link>
    </div>
  );
};

export default NotFoundPage;
