import ChallengeProgress from "@/components/challengeProgress";
import QuickStats from "@/components/quickStats";
import MealLogger from "@/components/mealLogger";
import DailyProgress from "@/components/dailyProgress";
import { Clock, Target } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-[300px] lg:min-w-[330px]">
          <DailyProgress />
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <div className="w-full md:flex-[2]">
            <MealLogger />
          </div>
          <div className="w-full space-y-3 md:flex-1 lg:min-w-[330px]">
            <ChallengeProgress planDuration={30} currDay={14} />
            <QuickStats
              currentStreak={7}
              remainingTime={16}
              rank={2}
              teamSize={12}
            />
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 mb-2">
                  <Clock /> Reminder
                </CardTitle>
                <CardDescription className="text-md mt-5">
                  <div className="bg-gray-100/10 p-3 rounded-md flex space-x-2">
                    <Target /> <span>Add breakfast meal</span>
                  </div>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
