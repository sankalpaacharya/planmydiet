type ChallengeProps = {
  planDuration: number;
  currDay: number;
};

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ChallengeProgress = ({ planDuration, currDay }: ChallengeProps) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const curDay = new Date()
    .toLocaleString("en-US", { weekday: "short" })
    .toUpperCase();
  const currIndex = days.findIndex((day) => day === curDay);

  return (
    <main className="flex">
      <Card className="w-72">
        <CardHeader>
          <CardTitle className="text-xl font-normal text-center">
            Challenge Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">Day {currDay}</p>
          <Progress value={55} className="w-full" />
          <p className="text-sm text-gray-500">
            {planDuration - currDay} days remaining
          </p>
        </CardContent>
        <CardFooter className="flex justify-around gap-2 w-full">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 ${
                index >= currIndex
                  ? "font-normal text-white-600"
                  : "text-gray-600"
              }`}
            >
              <span className="text-sm">{day}</span>
              <div
                className={`w-4 h-4 rounded-full ${
                  index < currIndex
                    ? "bg-green-500" //prevoius days
                    : index === currIndex
                    ? "bg-blue-500 animate-pulse" //current day as blue
                    : "border-2 border-gray-300" // next day
                }`}
              ></div>
            </div>
          ))}
        </CardFooter>
      </Card>
    </main>
  );
};

export default ChallengeProgress;
