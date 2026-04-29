// "use client"
import { Chip } from "@heroui/react";
import Image from "next/image";
import { FaBirthdayCake } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import { PiCowFill } from "react-icons/pi";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch("https://qurbani-hat-rintu.vercel.app/data.json", {
    cache: "no-store",
  });

  const animals = await res.json();

  const animal = animals.find((animal) => animal.id === Number(id));

  if (!animal) {
    return (
      <div className="text-center mt-10 text-red-500 text-xl">
        Animal not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={animal.image}
            fill
            alt={animal.name}
            className="object-cover p-2 rounded-xl"
          />

          <span className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
            <Chip>{animal.category}</Chip>
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{animal.name}</h1>

          <p className="text-gray-600">{animal.description}</p>

          <div className="space-y-2 text-gray-700">
            <p className="flex items-center gap-2">
              <PiCowFill /> Type: {animal.type}
            </p>
            <p className="flex items-center gap-2">
              <IoLocationSharp /> Location: {animal.location}
            </p>
            <p>🐮 Breed: {animal.breed}</p>
            <p>⚖️ Weight: {animal.weight} kg</p>
            <p className="flex items-center gap-2">
              <FaBirthdayCake /> Age: {animal.age} years
            </p>
          </div>

          <p className="text-2xl font-bold text-green-600 flex items-center gap-2">
            <GrMoney /> {animal.price} BDT
          </p>

          <div className="mt-6 border p-4 rounded-xl space-y-3">
            <h2 className="text-xl font-semibold">Book This Animal</h2>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-2 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-2 rounded-lg"
            />

            <textarea
              placeholder="Address"
              className="w-full border p-2 rounded-lg"
            />

            <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800">
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
