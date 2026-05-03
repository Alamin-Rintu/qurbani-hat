"use client";
import { useState } from "react";
import AnimalsCard from "@/components/AnimalsCard";
import data from "../../../public/data.json";
import { Label, ListBox, Select } from "@heroui/react";

const AllAnimalsPage = () => {
  const [sortType, setSortType] = useState("low");

  const sortedAnimals = [...data].sort((a, b) => {
    if (sortType === "low") return a.price - b.price;
    if (sortType === "high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto mt-5">
      <h2 className="font-bold text-2xl my-3">All Animals</h2>

      <div className="flex justify-end">
        <Select
          className="w-[256px]"
          placeholder="Sort by price"
          defaultSelectedKeys={["low"]}
          onSelectionChange={(key) => {
            const value = typeof key === "string" ? key : [...key][0];
            setSortType(value);
          }}
        >
          <Label>Sort By</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low">Low to High</ListBox.Item>
              <ListBox.Item id="high">High to Low</ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sortedAnimals.map((animal) => (
          <AnimalsCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;