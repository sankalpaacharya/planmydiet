import { Flame } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Card } from "./ui/card";

export default function planStats() {
  return (
    <div className="flex py-4 gap-6">
      <Card className="w-full h-24 flex items-center p-4">
        <div className="flex justify-around gap-4 items-center">
          <Flame className="text-orange-600" size={25}/>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Daily Calories</span>
            <span> kcal</span>
          </div>
        </div>
      </Card>
      <Card className="w-full h-24 flex items-center p-4">
        <div className="flex justify-around gap-4 items-center">
          <Apple className="text-green-600" size={25}/>
          <div className="flex flex-col">
            <span className="text-xl mb-1 font-semibold">Macro Distribution</span>
            <div className="flex gap-2">
							<Card className="bg-gray-900 p-2 text-xs">Carbs : 50%</Card>
							<Card className="bg-gray-900 p-2 text-xs">Protein : 30%</Card>
							<Card className="bg-gray-900 p-2 text-xs">Fats : 20%</Card>	
						</div>
          </div>
        </div>
      </Card>
      <Card className="w-full h-24 flex items-center p-4">
        <div className="flex justify-around gap-4 items-center">
          <CupSoda className="text-blue-600" size={25}/>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">Daily Water</span>
            <span> 3 litres</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
