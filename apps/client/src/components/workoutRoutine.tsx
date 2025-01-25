import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Dumbbell, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { primaryGoal, workoutRoutine } from "@/data/planData.json";

export default function WorkoutRoutine() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          <div className="text-lg font-bold flex gap-4 px-2">
            <Dumbbell className="text-rose-600" size={25} />
            Workout Routine
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex justify-between p-2">
            <span className="text-xl font-semibold">Goal : </span>
            <Badge className="text-sm">
              {primaryGoal ? (
                primaryGoal.toLowerCase().includes("muscle") ? (
                  <>
                    Muscle Gain <Dumbbell className="inline ml-2" />
                  </>
                ) : primaryGoal.toLowerCase().includes("weight loss") ? (
                  <>
                    Weight Loss <ArrowDownCircle className="inline ml-2" />
                  </>
                ) : primaryGoal.toLowerCase().includes("weight gain") ? (
                  <>
                    Weight Gain <ArrowUpCircle className="inline ml-2" />
                  </>
                ) : (
                  primaryGoal
                )
              ) : (
                "No goal set"
              )}
            </Badge>
          </div>
          <div className="p-2">
            {Object.entries(workoutRoutine).map(([day, exercises]) => (
              <div key={day} className="flex justify-between py-1 border-b-2">
                <span className="font-normal">{day}</span>
                <span className="font-light">{exercises}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
