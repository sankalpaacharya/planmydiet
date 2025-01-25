import { Utensils } from "lucide-react"
import PlanStats from "@/components/planStats"
import Plan from "@/components/plan"
import WorkoutRoutine from "@/components/workoutRoutine"
import DailyNutrition from "@/components/dailyNutrition"

export default function DietPlan() {
	return (
		<div className="px-12 py-4">
			<div className="flex gap-4">
				<Utensils  className="text-rose-600"/>
				<span>Personalized Diet Plan</span>
			</div>
			<PlanStats />
			<Plan />
			<div className="flex gap-6 py-6">
				<WorkoutRoutine />
				<DailyNutrition />
			</div>
		</div>
	)
}
