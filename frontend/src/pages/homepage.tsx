import NutritionOverview from "@/components/nutrition-overview";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import MealOverview from "@/components/meal-overview";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

interface NutritionData {
  completed_cal: number;
  completed_fats: number;
  completed_carbs: number;
  completed_proteins: number;
  remaining_cal: number;
  remaining_fats: number;
  remaining_carbs: number;
  remaining_proteins: number;
  breakfast: Meal[];
  lunch: Meal[];
  dinner: Meal[];
  snacks: Meal[];
}

interface Meal {
  name: string;
  description: string;
  calories: string;
}

export default function Homepage() {
  const [data, setData] = useState<NutritionData | null>(null); // State to hold the fetched data
  const [loading, setLoading] = useState<boolean>(true); // State for loading state
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/0581b0d2-b6c8-40fe-80e4-4081a8824451/2024-09-29"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData: NutritionData = await response.json(); // Type assertion
        setData(jsonData);
      } catch (err: any) {
        setError(err.message); // Handle the error
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[90%] w-[80%] md:px-5 lg:px-0 mt-5 ">
        <Navbar />
        <Timeline />
        <main>
          <div className="mt-10">
            <Button className="text-gray-200 bg-green-900 rounded-full">
              View My Plans
              <ChevronRight />
            </Button>
            {data && (
              <>
                <NutritionOverview
                  completedCalories={data.completed_cal}
                  completedFats={data.completed_fats}
                  completedCarbs={data.completed_carbs}
                  completedProteins={data.completed_proteins}
                  remainingCalories={data.remaining_cal}
                  remainingFats={data.remaining_fats}
                  remainingCarbs={data.remaining_carbs}
                  remainingProteins={data.remaining_proteins}
                />
                <MealOverview
                  meals={{
                    breakfast: data.breakfast,
                    lunch: data.lunch,
                    dinner: data.dinner,
                    snacks: data.snacks,
                  }}
                />
              </>
            )}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
