import { Link } from "@tanstack/react-router";
import { Route as PlanRoute } from '../routes/plan/$id.tsx'
import { Button } from "./ui/button.tsx";
import { ScrollText, Settings } from "lucide-react";

export default function viewPlan() {
  return (
    <div className="gap-6 flex items-center justify-between">
      <Link to={PlanRoute.to} params={{ id: 'some-id' }}>
      <Button >
        <ScrollText size={25}/>
        <div className="hidden xs:block text-lg">View My Plan</div>
      </Button>
      </Link>
      <Settings size={25} className="hover:text-rose-500"/>
    </div>
  );
}
