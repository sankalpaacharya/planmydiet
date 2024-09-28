import MealInformation from "@/components/meal-information";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import { Button } from "@/components/ui/button";
export default function homepage() {
  return (
    <div className="flex flex-col items-center">
      <div className="md:max-w-[95rem] md:px-5 lg:px-0 mt-5 w-full">
        <Navbar />
        <Timeline />
        <main>
          <div className="mt-10">
            <Button className="text-gray-200 bg-green-900 rounded-full">
              View My Plans
            </Button>
            <MealInformation />
          </div>
          <div className="mt-10"></div>
        </main>
      </div>
    </div>
  );
}
