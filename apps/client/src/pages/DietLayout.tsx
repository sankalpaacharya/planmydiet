import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@tanstack/react-router";

interface SelectPlan {
  goal: string;
  dietPreference: string;
  calorieIntake: number;
  budget: string;
}

export default function DietPlanPage() {
  const [mealPlans, setMealPlans] = useState<SelectPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("http://localhost:3000/plan/get");
        const data = await response.data;
        setMealPlans(data.data);
      } catch (err) {
        console.error("Error fetching meal plans:", err);
        setError("Failed to fetch meal plans.");
      } finally {
        setLoading(false);
      }
    };
    fetchPlans();
  }, []);

  return (
    <div className="w-full p-4 mb-16 flex justify-center">
      {loading ? (
        <p>Loading meal plans...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mealPlans.length > 0 ? (
            mealPlans.map((meal: any, index) => (
              <Link
                href={`/plan/${meal.id}`}
                to={`/plan/$id`}
                params={{ id: meal.id }}
              >
                <Card key={index} className="flex flex-col p-4">
                  <h3 className="text-xl font-semibold">Goal: {meal.goal}</h3>
                  <p>Diet Preference: {meal.dietPreference}</p>
                  <p>Calorie Intake: {meal.calorieIntake} calories</p>
                  <p>Budget: {meal.budget}</p>
                </Card>
              </Link>
            ))
          ) : (
            <p>No meal plans available.</p>
          )}
        </div>
      )}
    </div>
  );
}
