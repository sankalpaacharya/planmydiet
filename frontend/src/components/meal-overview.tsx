import { Milk, X } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";

interface Meal {
  name: string;
  quantity: string;
  calories: number;
}

interface MealCardProps {
  name: string;
  quantity: string;
  calories: number;
}

const MealCard: React.FC<MealCardProps> = ({ name, quantity, calories }) => (
  <div className="border p-3 w-fit rounded-lg space-y-5 w-[20rem]">
    <div className="flex justify-between">
      <h3 className="text-md font-bold">{name}</h3>
      <X size={20} className="cursor-pointer" />
    </div>
    <p>{quantity}</p>
    <p className="font-bold text-xl text-gray-400">{calories} Kal</p>
  </div>
);

export default function MealOverview() {
  const [selectedMeal, setSelectedMeal] = useState("breakfast");

  const mealData: { [key: string]: Meal[] } = {
    breakfast: [
      { name: "Banana", quantity: "1 Medium (7' to 7-8), long", calories: 99 },
      { name: "Egg", quantity: "1 Medium", calories: 99 },
    ],
    lunch: [
      { name: "Chicken Salad", quantity: "1 bowl", calories: 300 },
      { name: "Rice", quantity: "1 cup", calories: 200 },
    ],
    hiTea: [
      { name: "Cookies", quantity: "2 pieces", calories: 150 },
      { name: "Tea", quantity: "1 cup", calories: 50 },
    ],
    dinner: [
      { name: "Grilled Fish", quantity: "1 fillet", calories: 250 },
      { name: "Vegetables", quantity: "1 cup", calories: 100 },
    ],
  };

  return (
    <div>
      <h3 className="text-2xl uppercase flex items-center gap-2 text-gray-300 font-bold">
        Meal Overview <Milk />
      </h3>

      <div className="mt-5">
        <Select onValueChange={setSelectedMeal} defaultValue={selectedMeal}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a meal type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="breakfast">Breakfast ☕️</SelectItem>
            <SelectItem value="lunch">Lunch 🍽️</SelectItem>
            <SelectItem value="hiTea">Hi Tea 🍵</SelectItem>
            <SelectItem value="dinner">Dinner 🍲</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-10 space-y-5">
        <h2 className="text-lg font-bold flex items-center">
          {selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)}{" "}
          {selectedMeal === "breakfast"
            ? "☕️"
            : selectedMeal === "lunch"
              ? "🍽️"
              : selectedMeal === "hiTea"
                ? "🍵"
                : "🍲"}
        </h2>
        <div className="flex gap-10">
          {mealData[selectedMeal].map((meal, index) => (
            <MealCard key={index} {...meal} />
          ))}
        </div>
      </div>
    </div>
  );
}
