import { Button } from "./ui/button";
import { ScrollText, Settings } from "lucide-react";

export default function viewPlan() {
  return (
    <div className="flex gap-8">
      <Button>
        <ScrollText />
        <div className="text-lg">View My Plan</div>
      </Button>
      <Settings size={30}/>
    </div>
  );
}
