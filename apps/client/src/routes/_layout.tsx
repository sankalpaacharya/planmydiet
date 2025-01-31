import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  SquareCheckBig,
  Flame,
  TrendingUp,
  Swords,
  UsersRound,
  Utensils,
  ShoppingCart,
} from "lucide-react";
export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

const sideBarItems = [
  {
    name: "Progress",
    link: "/dashboard",
    icon: TrendingUp,
  },
  {
    name: "Challenges",
    link: "/challenges",
    icon: Swords,
  },
  {
    name: "Diet",
    link: "/diets",
    icon: Utensils,
  },
  {
    name: "Social",
    link: "/",
    icon: UsersRound,
  },
  {
    name: "Daily check",
    link: "/dailycheck",
    icon: SquareCheckBig,
  },
  {
    name: "Shop",
    link: "/shop",
    icon: ShoppingCart,
  },
];

function RouteComponent() {
  return (
    <div className="container">
      <div className="flex gap-10">
        <aside className="h-screen">
          <div className="mt-10 space-y-3">
            <Link
              className="flex font-bold text-2xl gap-2 items-center mb-7"
              to="/"
            >
              <Flame />
              <span>PlanMyDiet</span>
            </Link>
            {sideBarItems.map((item) => (
              <Link
                to={item.link}
                className="flex px-10 py-3 gap-2 hover:bg-gray-400/10 rounded-md"
              >
                <item.icon />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </aside>
        <div className="flex-1 mt-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
