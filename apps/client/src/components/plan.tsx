import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import {mealPlans} from "@/data/planData.json";

export default function Plan() {
  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  return (
    <Tabs
      defaultValue={new Date()
        .toLocaleDateString("en-US", { weekday: "long" })
        .toUpperCase()}
    >
      <TabsList className="w-full justify-around my-2">
        {days.map((day) => (
          <TabsTrigger key={day} value={day} className="w-40">
            {day.slice(0, 3)}
          </TabsTrigger>
        ))}
      </TabsList>
      {days.map((day) => {
        const currentPlan = mealPlans.find(
          (mealPlan) => mealPlan.day.toUpperCase() === day
        );
        if (!currentPlan) return null;
        const { meals } = currentPlan;

        return (
          <TabsContent key={day} value={day} className="border rounded-md">
            <h2 className="text-lg font-bold px-4 py-3">{day}'s Meal Plan</h2>

            <ScrollArea className="h-128 p-4">
              {Object.entries(meals).map(([mealType, dishes]) => {
                const totalCalories = dishes.reduce((sum, food) => sum + food.calories,0);
                return (
                  <Card key={mealType} className="p-4 mb-4">
                    <div className="flex justify-between items-center pb-3">
                      <h3 className="text-xl font-semibold capitalize">
                        {mealType}
                      </h3>
                      <div className="text-normal font-medium text-gray-300 border rounded-lg px-5 py-1">
                        {totalCalories} kcal
                      </div>
                    </div>
                    <div className="space-y-2">
                      {dishes.map((food, index) => (
                        <div
                          key={index}
                          className="flex flex-col justify-between border-b pb-1"
                        >
                          <div className="font-medium">{food.name}</div>
                          <div className="text-normal text-gray-600">
                            Ingredients: {food.ingredients.join(", ")}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </ScrollArea>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
