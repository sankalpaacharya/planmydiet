import { Flame } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Card } from "./ui/card";
import {dailyCalorieDistribution, dailyWaterIntake, dailyNutritionAverage} from '@/data/planData.json'

export default function planStats() {
  return (

    <div className="flex py-4 gap-6">
      <Card className="w-full h-28 flex gap-4 px-6 py-6">
        <Flame className="text-orange-600 self-center" size={25} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Daily Calories</span>
          <span> {dailyNutritionAverage.calories} kcal</span>
        </div>
      </Card>
      <Card className="w-full h-28 flex gap-4 px-6 py-6">
        <Apple className="text-green-600 self-center" size={25} />
        <div className="flex flex-col">
          <span className="text-xl mb-1 font-semibold">Macro Distribution</span>
          <div className="flex gap-2">
            <Card className="bg-gray-900 p-2 text-xs">Carbs : {dailyCalorieDistribution.carbohydrates}</Card>
            <Card className="bg-gray-900 p-2 text-xs">Protein : {dailyCalorieDistribution.proteins}</Card>
            <Card className="bg-gray-900 p-2 text-xs">Fats : {dailyCalorieDistribution.fats}</Card>
          </div>
        </div>
      </Card>
      <Card className="w-full h-28 flex gap-4 px-6 py-6">
        <CupSoda className="text-blue-600 self-center" size={25} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Daily Water</span>
          <span> {dailyWaterIntake} </span>
        </div>
      </Card>
    </div>
  );
}
