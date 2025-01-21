import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flame, Timer, UsersRound } from "lucide-react";
type QuickStatsProps = {
  currentStreak: number;
  teamSize: number;
  rank: number;
  remainingTime: number;
};

const QuickStats = ({
  currentStreak,
  teamSize,
  remainingTime,
  rank,
}: QuickStatsProps) => {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle className="text-2xl font-normal text-center">
          Quick Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 text-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Flame />
            <p className="text-lg font-normal">Current Streak</p>
          </div>
          <p className="text-xl font-semibold text-rose-500">
            {currentStreak} days
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Timer />
            <p className="text-lg font-normal">Time to Goal</p>
          </div>
          <p className="text-xl font-semibold text-rose-500">
            {remainingTime} days
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <UsersRound />
            <p className="text-lg font-normal">Team Rank</p>
          </div>
          <p className="text-xl font-semibold text-rose-500">
            #{rank} of {teamSize}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStats;
