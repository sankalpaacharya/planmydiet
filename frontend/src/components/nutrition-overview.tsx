// NutritionOverview.tsx
import React from 'react';
import { Activity, Atom } from "lucide-react";
import RadialProgressBar from "./radial-progress";
import NutritionBadge from "./nutrition-badge";

interface NutritionOverviewProps {
  completedCalories: number;
  completedFats: number;
  completedCarbs: number;
  completedProteins: number;
  remainingCalories: number;
  remainingFats: number;
  remainingCarbs: number;
  remainingProteins: number;
  activityLevel?: number; // Made optional
}

const NutritionOverview: React.FC<NutritionOverviewProps> = ({
  completedCalories,
  completedFats,
  completedCarbs,
  completedProteins,
  remainingFats,
  remainingCarbs,
  remainingProteins,
  activityLevel = 0, // Default value if not provided
}) => {
  return (
    <div className="mt-10">
      <h3 className="text-xl uppercase flex items-center gap-2 text-gray-300 font-bold">
        Nutrition Overview <Atom />
      </h3>
      <div className="mt-5 glass p-5 px-10 justify-between flex space-x-10 ">
        <div className="flex gap-10 ">
          <div className="w-fit flex justify-center flex-col items-center space-y-2">
            <span className="text-xl font-bold ">{completedCalories} kcal</span>
            <p className="gap-2 font-bold flex items-center">Complete</p>
          </div>
          <div className="w-fit flex justify-center flex-col items-center space-y-2">
            <RadialProgressBar />
            <p className="gap-2 font-bold flex items-center">Remaining</p>
          </div>
        </div>
        <div>
          <p className="px-5 py-2 bg-green-700 rounded-full w-fit">{activityLevel} 🔥</p>
          <div className="mt-5">
            <p className="flex items-center gap-2">
              <Activity size={16} />
              Activity
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <NutritionBadge
            color="bg-green-400"
            total={remainingFats}
            consumed={completedFats}
            type="Fat"
          />
          <NutritionBadge
            color="bg-indigo-400"
            total={remainingCarbs}
            consumed={completedCarbs}
            type="Carbs"
          />
          <NutritionBadge
            color="bg-pink-400"
            total={remainingProteins}
            consumed={completedProteins}
            type="Protein"
          />
        </div>
      </div>
    </div>
  );
};

export default NutritionOverview;
