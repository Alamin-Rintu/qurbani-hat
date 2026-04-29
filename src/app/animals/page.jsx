import AnimalsCard from "@/components/AnimalsCard";

const AllAnimalsPage = async () => {
  const res = await fetch("https://qurbani-hat-brown.vercel.app/data.json");
  const animals = await res.json();
  return (
    <div className="container mx-auto mt-5">
      <h2 className="font-bold text-2xl my-3">All Animals</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {animals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
