import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage"
import Navbar from "@/components/navbar";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="hjk">
      <Navbar />
      <HomePage />
    </div>
  );
}
