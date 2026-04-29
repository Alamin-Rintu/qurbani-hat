import { Button } from "@heroui/react";
import Link from "next/link";
import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/024/230/438/non_2x/islamic-background-for-eid-al-adha-with-mosque-mandala-cow-and-goat-icons-banner-template-with-empty-space-for-text-qurban-day-illustration-free-vector.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-5">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Perfect Qurbani Animal with Ease
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-300">
            You can get here your best Qurbani Animal.
          </p>

          <div className="flex gap-4">
            <Link href="/pricing">
              <Button
                variant="outline"
                className="text-white hover:bg-purple-500"
              >
                Choose Your Qurbani <FaAngleDoubleDown />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
