import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Flame, Timer, UsersRound, Trophy } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface QuickStatsProps {
  currentStreak: number;
  teamSize: number;
  rank: number;
  remainingTime: number;
  longestStreak?: number;
}

const StatRow: React.FC<StatItem> = ({ icon, label, value }) => (
  <div className="flex justify-between items-center p-2 hover:bg-neutral-800/50 rounded-lg transition-colors">
    <div className="flex items-center gap-2">
      <div className="text-neutral-400">{icon}</div>
      <p className="text-lg font-normal">{label}</p>
    </div>
    <p className="text-xl font-semibold text-rose-500">{value}</p>
  </div>
);

const QuickStats: React.FC<QuickStatsProps> = ({
  currentStreak,
  teamSize,
  remainingTime,
  rank,
  longestStreak = 15,
}) => {
  const stats: StatItem[] = [
    {
      icon: <Flame size={20} />,
      label: "Current Streak",
      value: `${currentStreak} days`,
    },
    {
      icon: <Timer size={20} />,
      label: "Time to Goal",
      value: `${remainingTime} days`,
    },
    {
      icon: <UsersRound size={20} />,
      label: "Team Rank",
      value: `#${rank} of ${teamSize}`,
    },
    {
      icon: <Trophy size={20} />,
      label: "Longest Streak",
      value: `${longestStreak} days`,
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-semibold text-center">
          Quick Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {stats.map((stat, index) => (
          <StatRow
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickStats;
