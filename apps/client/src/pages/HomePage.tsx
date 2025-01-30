import { Clock, Target } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import QuickStats from "@/components/quickStats";
import MealLogger from "@/components/mealLogger";
import DailyProgress from "@/components/dailyProgress";

const HomePage = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-full grid grid-cols-3 gap-4">
        {/* Left Section (QuickStats & MealLogger) */}
        <div className="col-span-2 space-y-4">
          <QuickStats
            currentStreak={7}
            remainingTime={16}
            rank={2}
            teamSize={12}
          />
          <MealLogger />
        </div>

        {/* Right Section (Reminder & DailyProgress) */}
        <div className="space-y-4">
          {/* Reminder */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Reminder
              </CardTitle>
              <CardDescription className="mt-5 space-y-2">
                <div className="bg-gray-100/10 p-3 rounded-md flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Add breakfast meal</span>
                </div>
                <div className="bg-gray-100/10 p-3 rounded-md flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Add breakfast meal</span>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Daily Progress */}
          <DailyProgress />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
