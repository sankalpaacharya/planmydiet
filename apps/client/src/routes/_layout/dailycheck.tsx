import Challenges from "@/pages/Challenges";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/dailycheck")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Challenges />
    </div>
  );
}
