import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimalsCard = ({ animal }) => {
  console.log(animal);
  const { image, name, type, price, weight, category,id } = animal;
  return (
    <div className="group  border-gray-100 rounded-2xl overflow-hidden shadow-sm p-4 space-y-3">
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          fill
          alt={name}
          className="object-cover p-2 rounded-xl"
        />

        <span className="absolute top-3 right-3 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
          <Chip>{category}</Chip>
        </span>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg text-gray-800">{name}</h2>
        <span className="text-sm text-gray-500">
          <span className="font-semibold">Type: </span> {type}
        </span>
      </div>

      <div className="flex justify-between items-center">
        <p className="flex items-center gap-2">
          {price} BDT
        </p>
        <p>{weight} KG</p>
      </div>
      <Link href={`animals/${id}`}><Button className={"w-full"} variant="outline">
        View Details
      </Button></Link>
    </div>
  );
};

export default AnimalsCard;
