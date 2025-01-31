import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { api } from "@/lib/axios";
import { Salad, CircleDollarSign , BicepsFlexed, UtensilsCrossed, ShieldPlus } from "lucide-react";

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
        console.log(response.data.data);
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
              <Link
                href={`/plan/${meal.id}`}
<<<<<<< HEAD
                to={`/plan/$id`}
                key={index}
                params={{ id: meal.id }}
              >
                <Card className="flex flex-col p-4 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold italic text-rose-400 mb-3">
                    {meal.goal}
                  </h3>

                  <div className="flex mb-3 border-b">
                    <p className="text-sm font-medium w-1/3 text-gray-400">
                      Diet Preference:
                    </p>
                    <p className="text-lg w-2/3">{meal.dietPreference}</p>
                  </div>

                  <div className="flex mb-3 border-b">
                    <p className="text-sm text-gray-400 font-medium w-1/3">
                      Calorie Intake:
                    </p>
                    <p className="text-lg w-2/3">
                      {meal.calorieIntake} calories
                    </p>
                  </div>

                  <div className="flex border-b">
                    <p className="text-sm font-medium w-1/3 text-gray-400">
                      Budget:
                    </p>
                    <p className="text-lg w-2/3">{meal.budget}</p>
                  </div>
=======
                to={`/plan/${meal.id}`}
                key={index}>
                <Card className="max-w-md w-full">
                  <CardHeader className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold ">
                        {meal.goal}
                      </h2>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <Salad className="w-5 h-5 text-blue-500 mt-1" />
                      <div className="flex gap-3">
                        <span className="font-semibold text-gray-400">
                          Diet Prefrence : {meal.dietPreference}
                        </span>
                        <p className="text-gray-400"></p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CircleDollarSign  className="w-5 h-5 text-green-500 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-400">
                          Budget : {meal.budget}
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <BicepsFlexed  className="w-5 h-5 text-orange-500" />
                      <span className="font-medium">
                        Activity Level : {meal.activityLevel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <UtensilsCrossed   className="w-5 h-5 text-amber-300" />
                      <span className="font-medium">
                        Calorie Intake Limit : {meal.calorieIntake}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <ShieldPlus   className="w-5 h-5 text-teal-600" />
                      <span className="font-medium">
                        Medical Conditions : {meal.medicalConditions}
                      </span>
                    </div>
                  </CardContent>
>>>>>>> 61b874bc24c7f69c81bbc3fda8812fb2582cb4c6
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
