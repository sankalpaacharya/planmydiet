import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
type ChallengeProps = {
  planDuration: number;
  currDay: number;
};

const ChallengeProgress = ({ planDuration, currDay }: ChallengeProps) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const curDay = new Date()
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase();
  const currIndex = days.findIndex((day) => day === curDay);

  return (
    <Card className="w-96 h-72 flex flex-col gap-4">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-center">
          Challenge Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">Day {currDay}</p>
        <Progress value={60} className="w-full" />
        <p className="text-sm text-gray-500">
          {planDuration - currDay} days remaining
        </p>
      </CardContent>
      <CardFooter className="flex justify-around gap-2 w-full">
        {days.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-2 ${
              index > currIndex ? "font-normal text-gray-500" : "text-white-600"
            }`}
          >
            <span className="text-sm">{day}</span>
            <div
              className={`w-4 h-4 rounded-full ${
                index < currIndex
                  ? "bg-rose-600" //prevoius days
                  : index === currIndex
                    ? "bg-rose-300 animate-pulse" //current day as blue
                    : "border-2 bg-gray-500" // next day
              }`}
            ></div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ChallengeProgress;
