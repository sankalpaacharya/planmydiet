import { Flame } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Card } from "./ui/card";
import {
  dailyCalorieDistribution,
  dailyWaterIntake,
  dailyNutritionAverage,
} from "@/data/planData.json";

export default function planStats() {
  return (
    <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 py-4 gap-6 ">
      <Card className="flex-1 w-full flex gap-4 p-6 items-center">
        <Flame className="text-orange-600 " size={25} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Daily Calories</span>
          <span> {dailyNutritionAverage.calories} kcal</span>
        </div>
      </Card>
      <Card className="flex-1 w-full flex gap-4 p-6 items-center">
        <Apple className="text-green-600 " size={25} />
        <div className="flex flex-col gap-1">
          <span className="text-xl font-semibold">Macro Distribution</span>
          <div className="flex gap-2">
            <Card className="bg-gray-900 p-2 text-xs">
              Carbs : {dailyCalorieDistribution.carbohydrates}
            </Card>
            <Card className="bg-gray-900 p-2 text-xs">
              Protein : {dailyCalorieDistribution.proteins}
            </Card>
            <Card className="bg-gray-900 p-2 text-xs">
              Fats : {dailyCalorieDistribution.fats}
            </Card>
          </div>
        </div>
      </Card>
      <Card className="flex-1 w-full flex gap-4 p-6 items-center">
        <CupSoda className="text-blue-600 " size={25} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Daily Water</span>
          <span> {dailyWaterIntake} </span>
        </div>
      </Card>
    </div>
  );
}
