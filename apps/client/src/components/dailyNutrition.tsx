import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Wheat, Flame, Salad, Ham, Pizza } from "lucide-react";
import { dailyNutritionAverage } from "@/data/planData.json";

export default function DailyNutrition() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="text-lg font-bold flex gap-4 px-2">
            <Wheat className="text-rose-600" size={25} />
            DailyNutrition
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 py-2 h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center bg-gray-700 p-3 rounded-full">
                <Flame size={30} className="text-red-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Total Calories</p>
                <p className="text-lg font-bold">
                  {dailyNutritionAverage.calories}{" "}
                  <span className="text-sm font-normal">kcal</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center bg-gray-700 p-3 rounded-full">
                <Salad size={30} className="text-yellow-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Carbohydrates</p>
                <p className="text-lg font-bold">
                  {dailyNutritionAverage.carbs}{" "}
                  <span className="text-sm font-normal">g</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center bg-gray-700 p-3 rounded-full">
                <Ham size={30} className="text-pink-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Protein</p>
                <p className="text-lg font-bold">
                  {dailyNutritionAverage.protein}{" "}
                  <span className="text-sm font-normal">g</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center bg-gray-700 p-3 rounded-full">
                <Pizza size={30} className="text-green-500" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium">Fat</p>
                <p className="text-lg font-bold">
                  {dailyNutritionAverage.fats}{" "}
                  <span className="text-sm font-normal">g</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
