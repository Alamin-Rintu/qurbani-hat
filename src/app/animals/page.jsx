import AnimalsCard from "@/components/AnimalsCard";

const AllAnimalsPage = async () => {
  const res = await fetch("https://qurbani-hat-el69.vercel.app/data.json" ,{cache:"no-store"});
  const animals = await res.json();
  const sortedAnimals = animals.sort((a, b) => a.price - b.price);
  return (
    <div className="container mx-auto mt-5">
      <h2 className="font-bold text-2xl my-3">All Animals</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedAnimals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
