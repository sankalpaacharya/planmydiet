import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/_layout/diets")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link href={"/diet/new"} to="/diet/new">
        <Button variant={"outline"}>Create Diet Plan</Button>
      </Link>
    </div>
  );
}
