import Videos from "@/pages/Videos";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/videos")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex justify-center">
      <Videos />
    </div>
  );
}
