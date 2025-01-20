import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
	CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const defaultData = {
	consumedCal: 300,
	targetCal: 900,
	fats: {
		consumedFats: 120,
		targetFats: 200,
		breakfastFats: 45,
		lunchFats: 75,
		highTeaFats: 30,
		dinnerFats: 50,
	},
	carbs: {
		consumedCarbs: 120,
		targetCarbs: 200,
		breakfastCarbs: 50,
		lunchCarbs: 70,
		highTeaCarbs: 40,
		dinnerCarbs: 40,
	},
	proteins: {
		consumedProteins: 300,
		targetProteins: 200,
		breakfastProteins: 150,
		lunchProteins: 150,
		highTeaProteins: 50,
		dinnerProteins: 100,
	},
};

export default function dailyProgress({ dailyData = defaultData }) {
	return (
		<Card className="w-80">
			<CardHeader>
				<CardTitle className="text-2xl font-normal text-center">
					Daily Progress
				</CardTitle>
				<CardDescription>
					<div className="">{dailyData.consumedCal}</div>
					<div className="">out of {dailyData.targetCal} kcal</div>
					<Progress
						value={(dailyData.consumedCal * 100) / dailyData.targetCal}
						className="w-full"
					/>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-2">
				<div className="fat">
					<div>Fat</div>
					<div>
						{dailyData.fats.consumedFats}/{dailyData.fats.targetFats}
					</div>
					<Progress
						value={(dailyData.fats.consumedFats * 100) / dailyData.fats.targetFats}
						className="w-full"
					/>
				</div>
				<div className="carbs">
					<div>Carbs</div>
					<div>
						{dailyData.carbs.consumedCarbs}/{dailyData.carbs.targetCarbs}
					</div>
					<Progress
						value={(dailyData.carbs.consumedCarbs * 100) / dailyData.carbs.targetCarbs}
						className="w-full"
					/>
				</div>
				<div className="protein">
					<div>Protein</div>
					<div>
						{dailyData.proteins.consumedProteins}/{dailyData.proteins.targetProteins}
					</div>
					<Progress
						value={(dailyData.proteins.consumedProteins * 100) / dailyData.proteins.targetProteins}
						className="w-full"
					/>
				</div>
			</CardContent>
			<CardFooter className="flex justify-around gap-2 w-full"></CardFooter>
		</Card>
	);
}
