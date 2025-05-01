"use client";
import React, { useState } from "react";
import { db } from "@/configs/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

const AddMeal = () => {
  const router = useRouter();

  const [meal, setMeal] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await addDoc(collection(db, "meals"), {
        name: meal.name,
        price: Number(meal.price),
        quantity: Number(meal.quantity),
      });
      
      setMessage("Meal added successfully!");
      setMeal({
        name: "",
        price: "",
        quantity: "",
      });
      router.push("/admin/meals");
    } catch (error) {
      setMessage("Failed to add meal. Check console for errors.");
      console.error("Error adding meal:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg font-pop">
      <h2 className="text-xl font-semibold mb-4">Add a Meal</h2>
      {message && (
        <p className="text-sm text-center text-green-600">{message}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Meal Name</label>
          <input
            type="text"
            name="name"
            value={meal.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={meal.quantity}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Price (KES)</label>
          <input
            type="number"
            name="price"
            value={meal.price}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded"
        >
          {loading ? "Adding..." : "Add Meal"}
        </button>
      </form>
    </div>
  );
};

export default AddMeal;