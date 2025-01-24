import { createFileRoute } from "@tanstack/react-router";
import DietPlan from "@/pages/DietPlan"

export const Route = createFileRoute("/plan/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  // const { id } = Route.useParams();
  return (
    <DietPlan />
  );
}
