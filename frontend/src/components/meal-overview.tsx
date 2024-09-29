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
  description: string;
}

interface MealOverviewProps {
  meals: {
    breakfast?: Meal[];
    lunch?: Meal[];
    dinner?: Meal[];
    snacks?: Meal[];
  };
}

interface MealCardProps {
  name: string;
  description: string;
  calories: number;
}

const MealCard: React.FC<MealCardProps> = ({ name, description, nutrition }) => (
  <div className="border p-3 rounded-lg space-y-5 w-[20rem]">
    <div className="flex justify-between">
      <h3 className="text-md font-bold">{name}</h3>
      <X size={20} className="cursor-pointer" />
    </div>
    <p>{description}</p>
    <p className="font-bold text-xl text-gray-400">
      {nutrition.calories ? `${nutrition.calories} Kal` : "400 Kal"}
    </p>
  </div>
);

const MealOverview: React.FC<MealOverviewProps> = ({ meals }) => {
  const [selectedMeal, setSelectedMeal] = useState<"breakfast" | "lunch" | "dinner" | "snacks">("breakfast");

  const currentMeals = meals[selectedMeal] || []; // Fallback to an empty array if no data

  return (
    <div>
      <h3 className="text-2xl uppercase flex items-center gap-2 text-gray-300 font-bold">
        Meal Overview <Milk />
      </h3>

      <div className="mt-5">
        <Select onValueChange={(value) => setSelectedMeal(value as "breakfast" | "lunch" | "dinner" | "snacks")} defaultValue={selectedMeal}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a meal type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="breakfast">Breakfast ☕️</SelectItem>
            <SelectItem value="lunch">Lunch 🍽️</SelectItem>
            <SelectItem value="snacks">Snacks 🍵</SelectItem>
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
            : selectedMeal === "snacks"
            ? "🍵"
            : "🍲"}
        </h2>
        <div className="flex gap-10">
          {currentMeals.length > 0 ? (
            currentMeals.map((meal, index) => (
              <MealCard key={index} {...meal} />
            ))
          ) : (
            <p>No meals available for {selectedMeal}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealOverview;
