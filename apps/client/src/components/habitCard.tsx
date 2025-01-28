import { Card } from "@/components/ui/card";
import CalendarHeatmap from "react-calendar-heatmap";
import { useState } from "react";
import Confetti from "react-confetti";
import { Check } from "lucide-react";
import "@/assets/styles/calendar.css";

type StatItemProps = { value: number | string; label: string };
type LegendItemProps = { color: string; label: string };
type HabitCardProps = {
  title: string;
  emoji: string;
  streak: number;
  consistency: number;
  checkins: number;
  data: { date: string; type: string }[];
};

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center">
    <div className="xs:text-xl sm:text-2xl md:text-3xl font-semibold">
      {value}
    </div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);
const LegendItem = ({ color, label }: LegendItemProps) => (
  <div className="flex items-center gap-1">
    <div className={`w-3 h-3 rounded-sm ${color}`}></div>
    <span>{label}</span>
  </div>
);

export default function HabitCard({
  title,
  emoji,
  streak,
  consistency,
  checkins,
  data,
}: HabitCardProps) {
  const [isChecked, setIsChecked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCheck = () => {
    setIsChecked((prev) => {
      const newChecked = !prev;
      if (newChecked) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
      return newChecked;
    });
  };

  const stats = [
    { value: streak, label: "Streak" },
    { value: `${consistency}%`, label: "Consistency" },
    { value: checkins, label: "Check-ins" },
  ];

  const legendItems = [
    { color: "bg-emerald-500", label: "Check-in" },
    { color: "bg-red-400", label: "Miss" },
    { color: "bg-slate-600", label: "Day off" },
  ];

  return (
    <Card className="p-5 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={250}
            gravity={0.2}
          />
        </div>
      )}

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{emoji}</span>
          <span className="text-gray-300">{title}</span>
        </div>
        <div
          className={`w-6 h-6 border border-gray-600 rounded cursor-pointer transition-colors duration-200 
					${isChecked ? "bg-emerald-500" : ""}`}
          onClick={handleCheck}>
          {isChecked && <Check />}
        </div>
      </div>

      <div className="flex justify-between mb-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>

      <CalendarHeatmap
        startDate="2024-08-1"
        endDate={new Date()}
        values={data}
        showWeekdayLabels={true}
        weekdayLabels={["", "Mon", "", "Wed", "", "Fri", ""]}
        gutterSize={2}
        classForValue={(value) => (value ? value.type : "empty")}
      />

      <div className="flex gap-4 text-xs text-gray-400 justify-start">
        {legendItems.map((item, index) => (
          <LegendItem key={index} {...item} />
        ))}
      </div>
    </Card>
  );
}
