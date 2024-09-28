import { Progress } from "@/components/ui/progress";

interface NutritionBadgeProps {
  type: string;
  total: number;
  consumed: number;
  color: string;
}

export default function NutritionBadge({
  type,
  total,
  consumed,
  color,
}: NutritionBadgeProps) {
  const progressValue = (consumed / total) * 100;

  return (
    <div className="flex-col items-center flex justify-center rounded-full">
      <p className="text-lg text-gray-400 font-bold">{type}</p>
      <Progress
        indicatorColor={color}
        value={progressValue}
        className="w-[8rem] h-[0.5rem]"
      />
      <p className="mt-3">
        <span className="font-bold">{consumed}</span>/{total}g
      </p>
    </div>
  );
}
