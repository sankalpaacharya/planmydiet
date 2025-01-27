import ChallengeProgress from "@/components/challengeProgress";
import QuickStats from "@/components/quickStats";
import MealLogger from "@/components/mealLogger";
import DailyProgress from "@/components/dailyProgress";

export default function HomePage() {
  return (
    <div className="container mx-auto py-4 mb-16">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-[350px] lg:min-w-[300px]">
          <ChallengeProgress planDuration={30} currDay={14} />
          <QuickStats
            currentStreak={7}
            remainingTime={16}
            rank={2}
            teamSize={12}
          />
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-6">
          <div className="w-full md:flex-[2]">
            <MealLogger />
          </div>
          <div className="w-full md:flex-1">
            <DailyProgress />
          </div>
        </div>
      </div>
    </div>
  );
}