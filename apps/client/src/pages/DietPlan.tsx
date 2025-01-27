import { Utensils } from "lucide-react";
import PlanStats from "@/components/planStats";
import Plan from "@/components/plan";
import WorkoutRoutine from "@/components/workoutRoutine";
import DailyNutrition from "@/components/dailyNutrition";
import PersonalDetails from "@/components/personalDetails";

function Title() {
  return (
    <div className="flex gap-4 items-center self-start font-semibold">
      <Utensils className="text-rose-600 w-6 h-6" />
      <span>Personalized Diet Plan</span>
    </div>
  );
}

export default function DietPlan() {
	return (
		<div className="w-full p-4 mb-16 flex justify-center">
			<div className="w-full max-w-7xl flex flex-col items-center">
				<Title />
				<PlanStats />
				<Plan />
				<div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-6">
					<WorkoutRoutine />
					<PersonalDetails />
					<DailyNutrition />
				</div>
			</div>
		</div>
	);
}
