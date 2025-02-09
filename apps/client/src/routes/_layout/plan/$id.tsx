import { createFileRoute } from "@tanstack/react-router";
import DietPlan from "@/pages/DietPlan";

export const Route = createFileRoute("/_layout/plan/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  // const { id } = Route.useParams();
  // useEffect(() => {
  //   const fetchData = () => {
  //     const response = await api.get("/plan");
  //   };
  // });

  return (
    <div>
      <DietPlan />
    </div>
  );
}
