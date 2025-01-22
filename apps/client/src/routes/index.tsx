import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/pages/HomePage"
import Navbar from "@/components/navbar";
import Menubar from "@/components/menubar";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <Navbar />
      <HomePage />
      <Menubar />
    </div>
  );
}
