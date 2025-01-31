import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { api } from "@/lib/axios";

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
        const response = await api.get("/plan/get");
        console.log(response);
        setMealPlans(response.data.data);
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
    <div className="w-full p-4 pl-0 mb-16 flex justify-center">
    {loading ? (
      <p>Loading meal plans...</p>
    ) : error ? (
      <p className="text-rose-600">{error}</p>
    ) : (
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mealPlans.length > 0 ? (
          mealPlans.map((meal: any, index) => (
            <Link href={`/plan/${meal.id}`} to={`/plan/${meal.id}`} key={index}>
              <Card className="flex flex-col p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                
                <h3 className="text-2xl font-semibold italic text-rose-400 mb-3">{meal.goal}</h3>

                <div className="flex mb-3 border-b">
                  <p className="text-sm font-medium w-1/3 text-gray-400">Diet Preference:</p>
                  <p className="text-lg w-2/3">{meal.dietPreference}</p>
                </div>
                
                <div className="flex mb-3 border-b">
                  <p className="text-sm text-gray-400 font-medium w-1/3">Calorie Intake:</p>
                  <p className="text-lg w-2/3">{meal.calorieIntake} calories</p>
                </div>
  
                <div className="flex border-b">
                  <p className="text-sm font-medium w-1/3 text-gray-400">Budget:</p>
                  <p className="text-lg w-2/3">{meal.budget}</p>
                </div>
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
