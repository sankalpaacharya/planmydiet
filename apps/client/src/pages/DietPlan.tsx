import { Utensils } from "lucide-react"
import PlanStats from "@/components/planStats"
export default function DietPlan() {
	return (
		<div className="px-8 py-4">
			<div className="flex gap-4">
				<Utensils  className="text-rose-600"/>
				<span>Personalized Diet Plan</span>
			</div>
			<div>
				<PlanStats />
			</div>

		</div>
	)
}
