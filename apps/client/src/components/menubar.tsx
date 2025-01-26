import { TrendingUp, Users, Utensils, Calendar } from "lucide-react";

const menuItems = [
  { icon: TrendingUp, label: "Progress" },
  { icon: Utensils, label: "Meal" },
  { icon: Calendar, label: "Plan" },
  { icon: Users, label: "Social" },
];

export default function Menubar() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-evenly py-3 bg-slate-950">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:text-rose-500 w-full max-w-40 hover:cursor-pointer"
        >
          <item.icon size={20} />
          <span className="text-sm mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
