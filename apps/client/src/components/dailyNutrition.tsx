import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Flame, Salad, Ham, Pizza, Wheat } from "lucide-react";
import { dailyNutritionAverage } from "@/data/planData.json";

const nutritionData = [
  {
    label: "Total Calories",
    value: dailyNutritionAverage.calories,
    unit: "kcal",
    icon: Flame,
    iconColor: "text-red-500",
  },
  {
    label: "Carbohydrates",
    value: dailyNutritionAverage.carbs,
    unit: "g",
    icon: Salad,
    iconColor: "text-yellow-500",
  },
  {
    label: "Protein",
    value: dailyNutritionAverage.protein,
    unit: "g",
    icon: Ham,
    iconColor: "text-pink-500",
  },
  {
    label: "Fat",
    value: dailyNutritionAverage.fats,
    unit: "g",
    icon: Pizza,
    iconColor: "text-green-500",
  },
];

import { LucideIcon } from "lucide-react";

interface NutritionItemProps {
  label: string;
  value: string;
  unit: string;
  Icon: LucideIcon;
  iconColor: string;
}

function NutritionItem({
  label,
  value,
  unit,
  Icon,
  iconColor,
}: NutritionItemProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="flex items-center bg-gray-700 p-3 rounded-full">
          <Icon size={25} className={iconColor} />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-lg font-bold">
            {value} <span className="text-sm font-normal">{unit}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DailyNutrition() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="text-lg font-bold flex gap-4 px-4">
            <Wheat className="text-rose-600" size={25} />
            Daily Nutrition
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6 h-full p-2">
          {nutritionData.map((item, index) => (
            <NutritionItem
              key={index}
              label={item.label}
              value={item.value}
              unit={item.unit}
              Icon={item.icon}
              iconColor={item.iconColor}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
