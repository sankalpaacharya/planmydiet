import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Timer, Target, Share2 } from "lucide-react";
import allChallenges from "@/data/onGoingChallenges.json";

export default function ChallengeCard() {
  return (
    <div className="my-4 grid lg:grid-cols-3 gap-5">
      {Object.entries(allChallenges).map((challenge) => (
        <Card className="max-w-md w-full">
          <CardHeader className="space-y-1">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold ">{challenge[1].title}</h2>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Invite
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <Target className="w-5 h-5 text-blue-500 mt-1" />
              <div className="flex gap-3">
                <span className="font-semibold text-gray-400">
                  Challenge Goal :
                </span>
                <p className="text-gray-400">{challenge[1].goal}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-5 h-5 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-400">
                  Participants : {challenge[1].participants.length}
                </h3>
              </div>
            </div>
          </CardContent>
          <CardFooter className=" rounded-b-lg">
            <div className="flex items-center gap-2 text-gray-400">
              <Timer className="w-5 h-5 text-orange-500" />
              <span className="font-medium">
                Ends in: {challenge[1].endsIn}
              </span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
