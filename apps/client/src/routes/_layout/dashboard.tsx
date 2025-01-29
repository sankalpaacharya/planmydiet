import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage";
import Navbar from "@/components/navbar";
// import Menubar from "@/components/menubar";

export const Route = createFileRoute("/_layout/dashboard")({
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
