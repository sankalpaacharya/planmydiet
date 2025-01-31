import { createFileRoute } from "@tanstack/react-router";
import DietPlan from "@/pages/DietPlan";
import Menubar from "@/components/menubar";
import { useEffect } from "react";
import { api } from "@/lib/axios";

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
      <Menubar />
    </div>
  );
}
