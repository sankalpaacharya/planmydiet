import { Flame } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Card } from "./ui/card";

export default function planStats() {
  return (
    <div className="flex py-4 gap-6">
      <Card className="w-full h-28 flex gap-4 px-6 py-6">
        <Flame className="text-orange-600 self-center" size={25} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Daily Calories</span>
          <span> kcal</span>
        </div>
      </Card>
      <Card className="w-full h-28 flex gap-4 px-6 py-6">
        <Apple className="text-green-600 self-center" size={25} />
        <div className="flex flex-col">
          <span className="text-xl mb-1 font-semibold">Macro Distribution</span>
          <div className="flex gap-2">
            <Card className="bg-gray-900 p-2 text-xs">Carbs : 50%</Card>
            <Card className="bg-gray-900 p-2 text-xs">Protein : 30%</Card>
            <Card className="bg-gray-900 p-2 text-xs">Fats : 20%</Card>
          </div>
        </div>
      </Card>
      <Card className="w-full h-28 flex gap-4 px-6 py-6">
        <CupSoda className="text-blue-600 self-center" size={25} />
        <div className="flex flex-col">
          <span className="text-xl font-semibold">Daily Water</span>
          <span> 3 litres</span>
        </div>
      </Card>
    </div>
  );
}
