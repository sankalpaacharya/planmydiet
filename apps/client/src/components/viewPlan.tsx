import { Button } from "./ui/button";
import { ScrollText, Settings } from "lucide-react";

export default function viewPlan() {
  return (
    <div className="flex gap-8 items-center">
      <Button >
        <ScrollText size={25}/>
        <div className="text-lg">View My Plan</div>
      </Button>
      <Settings size={25} className="hover:text-rose-500"/>
    </div>
  );
}
