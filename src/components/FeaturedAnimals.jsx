import Link from "next/link";
import AnimalsCard from "./AnimalsCard";
import { Button } from "@heroui/react";
import { FaAnglesDown } from "react-icons/fa6";

const FeaturedAnimals = async () => {
  const res = await fetch("https://qurbani-hat-el69.vercel.app/data.json");
  const animals = await res.json();
  const eidAnimal = animals.slice(0, 4);
  return (
    <div>
      <h2 className="font-bold text-2xl my-3">Featured animals</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {eidAnimal.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Link href={"/animals"}>
          <Button
            className={
              "bg-purple-500 text-white font-bold text-lg hover:bg-purple-700"
            }
            variant="outline"
          >
            See All Here <FaAnglesDown />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedAnimals;
