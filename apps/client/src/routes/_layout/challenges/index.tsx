import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import ChallengeCard from "@/components/challengeCard";
export const Route = createFileRoute("/_layout/challenges/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Link href={"/challenges/new"} to="/challenges/new">
        <Button variant={"outline"}>Create a challenge</Button>
      </Link>
      <ChallengeCard />
    </div>
  );
}
