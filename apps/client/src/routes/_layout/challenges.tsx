import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/_layout/challenges")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link href={"/challenge/new"} to="/challenge/new">
        <Button variant={"outline"}>Create a challenge</Button>
      </Link>
    </div>
  );
}
