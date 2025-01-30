import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/diet")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_layout/planes"!</div>;
}
