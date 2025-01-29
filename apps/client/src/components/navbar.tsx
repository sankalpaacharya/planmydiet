import DateNavigator from "@/components/dateNavigator";
import ViewPlan from "@/components/viewPlanButton";

export default function navbar() {
  return (
    <div className="w-full flex mb-6 gap-1 justify-between">
      <DateNavigator />
      <ViewPlan />
    </div>
  );
}
