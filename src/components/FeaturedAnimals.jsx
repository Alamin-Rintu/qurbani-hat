import React from "react";
import AnimalsCard from "./AnimalsCard";

const FeaturedAnimals = async () => {
  const res = await fetch("https://qurbani-hat-brown.vercel.app/data.json");
  const animals = await res.json();
  // console.log(animals);
  return (
    <div>
      <h2>Featured animals</h2>
      <div className="grid grid-cols-3 gap-4">
        {animals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedAnimals;
