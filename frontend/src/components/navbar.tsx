import { Bell, Utensils } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function navbar() {
  return (
    <div>
      <div className=" py-5 flex justify-between mt-3">
        <h2 className="text-2xl font-bold text-green-400">PlanMyDiet</h2>
        <div className="flex space-x-8 items-center">
          <Utensils size={20} />
          <Bell size={20} />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <Separator />
    </div>
  );
}
