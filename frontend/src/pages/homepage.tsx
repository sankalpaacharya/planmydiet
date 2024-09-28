import NutritionOverview from "@/components/nutrition-overview";
import Navbar from "@/components/navbar";
import Timeline from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Mealoverview from "@/components/meal-overview";
import Footer from "@/components/footer";

export default function homepage() {
  return (
    <div className="flex flex-col items-center">
      <div className="md:max-w-[95rem] md:px-5 lg:px-0 mt-5 w-full">
        <Navbar />
        <Timeline />
        <main>
          <div className="mt-10">
            <Button className="text-gray-200  bg-green-900 rounded-full">
              View My Plans
              <ChevronRight />
            </Button>
            <NutritionOverview />
          </div>
          <div className="mt-10">
            <Mealoverview />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
