import { TrendingUp, Users, Utensils, Calendar } from "lucide-react";

export default function Menubar() {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-evenly py-3 bg-slate-950 h-">
      <div className="flex flex-col items-center">
        <TrendingUp size={20} className="hover:text-rose-500" />
        <span className="text-sm mt-1">Progress</span>
      </div>
      <div className="flex flex-col items-center">
        <Utensils size={20} className="hover:text-rose-500" />
        <span className="text-sm mt-1">Meal</span>
      </div>
      <div className="flex flex-col items-center">
        <Calendar size={20} className="hover:text-rose-500" />
        <span className="text-sm mt-1">Plan</span>
      </div>
      <div className="flex flex-col items-center">
        <Users size={20} className="hover:text-rose-500" />
        <span className="text-sm mt-1">Social</span>
      </div>
    </div>
  );
}