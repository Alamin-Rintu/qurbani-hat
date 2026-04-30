"use client";
import React from "react";
import { toast } from "react-toastify";

const BookingAnimal = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    toast.success("Booking Confirmed");
    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-6 border p-4 rounded-xl space-y-3"
      >
        <h2 className="text-xl font-semibold">Book This Animal</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-2 rounded-lg"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-2 rounded-lg"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 rounded-lg"
        />

        <textarea
          name="address"
          placeholder="Address"
          className="w-full border p-2 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingAnimal;
