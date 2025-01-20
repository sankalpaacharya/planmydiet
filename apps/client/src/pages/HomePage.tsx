type Props = {};
import ChallengeProgress from "@/components/homepage/challengeProgress";
import QuickStats from "@/components/homepage/quickStats";

export default function HomePage({}: Props) {
  return (
    <main className="flex">
      <div className="flex flex-col gap-4">
        <ChallengeProgress planDuration={30} currDay={14} />
        <QuickStats
          currentStreak={7}
          remainingTime={16}
          rank={2}
          teamSize={12}
        />
      </div>
    </main>
  );
}
