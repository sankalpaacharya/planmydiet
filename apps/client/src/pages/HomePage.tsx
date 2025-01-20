import ChallengeProgress from "@/components/challengeProgress";
import QuickStats from "@/components/quickStats";
import MealLogger from "@/components/mealLogger";
import DailyProgress from "@/components/dailyProgress";

export default function HomePage() {
  return (
    <main className="flex gap-4 p-8">
      <div className="flex flex-col gap-4">
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
  );
}
