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
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 ">
          {stats.map((stat) => (
            <div key={stat.label} className="py-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                {stat.icon}
                <span className="text-sm">{stat.label}</span>
              </div>
              <div className="text-xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickStats;
