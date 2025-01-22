import DateNavigator from "@/components/dateNavigator";
import ViewPlan from "@/components/viewPlan";

export default function navbar() {
  return (
    <div className="flex justify-between mx-12 my-4">
      <DateNavigator />
      <ViewPlan />
    </div>
  );
}
