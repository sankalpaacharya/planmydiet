import HabitCard from "@/components/habitCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { habits } from "@/data/challenges.json";

const Dashboard = () => {
  return (
    <div className="mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <Button className="px-4 py-5 rounded text-base" variant={"outline"}>
            Create New Challenge
            <Plus />
          </Button>
          <div className="flex items-center gap-2 ">
            <div className="w-6 h-6 bg-orange-500 rounded"></div>
            <span>Reward awaits!</span>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {Object.values(habits).map((habit) => (
            <HabitCard key={habit.title} {...habit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
