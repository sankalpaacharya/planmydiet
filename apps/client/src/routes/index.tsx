import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage"
import Navbar from "@/components/navbar";
import Menubar from "@/components/menubar";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-7xl m-auto p-4">
      <Navbar />
      <HomePage />
      <Menubar />
    </div>
  );
}
