import { Activity, Atom, Check, Utensils } from "lucide-react";
import RadialProgressBar from "./radial-progress";
import Nutritionbadge from "./nutrition-badge";

export default function mealinformation() {
  return (
    <div className="mt-10">
      <h3 className="text-xl uppercase flex items-center gap-2 text-gray-300 font-bold">
        Nutrition Overview <Atom />
      </h3>
      <div className="mt-5 glass p-5 px-10 justify-between flex space-x-10">
        <div className="flex gap-10">
          <div className="w-fit flex justify-center flex-col items-center space-y-2">
            <Check size={20} />
            <div className="w-[9rem] h-[9rem] bg-gray-800 flex justify-center items-center rounded-full">
              <span className="text-xl font-bold">300 kal</span>
            </div>
            <p className="gap-2 font-bold flex items-center">Complete</p>
          </div>
          <div className="w-fit flex justify-center flex-col items-center space-y-2">
            <Utensils size={20} />
            <RadialProgressBar />
            <p className="gap-2 font-bold flex items-center">Remaining</p>
          </div>
        </div>
        <div>
          <p className="px-5 py-2 bg-green-700 rounded-full w-fit">2 🔥</p>
          <div className="mt-5">
            <p className="flex items-center gap-2">
              <Activity size={16} />
              Activity
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <Nutritionbadge
            color="bg-green-400"
            total={200}
            consumed={120}
            type="Fat"
          />
          <Nutritionbadge
            color="bg-indigo-400"
            total={200}
            consumed={120}
            type="Carbs"
          />
          <Nutritionbadge
            color="bg-pink-400"
            total={200}
            consumed={300}
            type="Protein"
          />
        </div>
      </div>
    </div>
  );
}
