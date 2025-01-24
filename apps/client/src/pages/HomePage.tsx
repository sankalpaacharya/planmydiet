import ChallengeProgress from "@/components/challengeProgress";
import QuickStats from "@/components/quickStats";
import MealLogger from "@/components/mealLogger";
import DailyProgress from "@/components/dailyProgress";

export default function HomePage() {
  return (
    <div className="m-auto pb-16">
      <main className="flex gap-6 px-8 py-2 max-w-7xl">
        <div className="flex flex-col gap-6">
          <ChallengeProgress planDuration={30} currDay={14} />
          <QuickStats
            currentStreak={7}
            remainingTime={16}
            rank={2}
            teamSize={12}
          />
        </div>
        <div className="flex">
          <MealLogger />
        </div>
        <div className="flex">
          <DailyProgress />
        </div>
      </main>
    </div>
  );
}
