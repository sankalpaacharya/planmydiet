import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/navbar";

export const Route = createFileRoute("/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}
