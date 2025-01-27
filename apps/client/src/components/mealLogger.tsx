import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

const defaultData = {
  breakfast: [
    { food: "Banana", cal: 90, amount: 0, count: 1 },
    { food: "Egg", cal: 180, amount: 0, count: 2 },
    { food: "Oats", cal: 150, amount: 100, count: 0 },
  ],
  lunch: [
    { food: "Rice", cal: 200, amount: 150, count: 0 },
    { food: "Chicken Curry", cal: 250, amount: 100, count: 0 },
    { food: "Chapati", cal: 120, amount: 0, count: 2 },
  ],
  high_tea: [
    { food: "Cookies", cal: 150, amount: 0, count: 3 },
    { food: "Tea", cal: 50, amount: 200, count: 0 },
    { food: "Mixed Nuts", cal: 100, amount: 50, count: 0 },
  ],
  dinner: [
    { food: "Soup", cal: 100, amount: 300, count: 0 },
    { food: "Grilled Fish", cal: 250, amount: 150, count: 0 },
    { food: "Steamed Vegetables", cal: 150, amount: 100, count: 0 },
  ],
};

interface MealData {
  food: string;
  cal: number;
  amount: number;
  count: number;
}

interface Meals {
  breakfast: MealData[];
  lunch: MealData[];
  high_tea: MealData[];
  dinner: MealData[];
}

export default function MealLogger({ meal = defaultData }) {
  function renderMeal(mealType: keyof Meals, mealData: MealData[]) {
    if (!mealData || mealData.length === 0)
      return (
        <p className="text-sm text-gray-500 text-center">
          No meals logged for {mealType}.
        </p>
      );

    return (
      <div className="w-full flex flex-col pb-6">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold ">
            {mealType.charAt(0).toUpperCase() +
              mealType.slice(1).replace("_", "-")}
          </p>
          <p className="text-gray-500 text-base font-medium">
            {mealData.reduce((sum, item) => sum + item.cal, 0)} kcal
          </p>
        </div>

        <div className="space-y-4">
          {mealData.map((item, index) => (
            <div
              className="flex items-center justify-between bg-gray-600 bg-opacity-20 p-3 rounded-md "
              key={index}
            >
              <div className="text-base font-medium text-left">
                {item.food}
                <div className="text-sm text-gray-400 mt-1">
                  {item.count > 0 ? `${item.count} Pcs` : `${item.amount} Grms`}
                </div>
              </div>

              <div className="text-base font-normal ">{item.cal} kcal</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card className="w-full h-full flex flex-col items-center pb-2">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold ">Today's Meals</CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <Tabs defaultValue="all" className="w-full ">
          <TabsList className="w-full justify-around mb-4 overflow-x-scroll xs:overflow-clip">
            <TabsTrigger value="all">ALL</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="high_tea">High-Tea</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
          </TabsList>
          <ScrollArea className="w-full h-85 rounded-md mb-2">
            <TabsContent value="all">
              {(
                ["breakfast", "lunch", "high_tea", "dinner"] as Array<
                  keyof Meals
                >
              ).map((mealType) => (
                <div key={mealType}>{renderMeal(mealType, meal[mealType])}</div>
              ))}
            </TabsContent>
            <TabsContent value="breakfast">
              {renderMeal("breakfast", meal.breakfast)}
            </TabsContent>
            <TabsContent value="lunch">
              {renderMeal("lunch", meal.lunch)}
            </TabsContent>
            <TabsContent value="high_tea">
              {renderMeal("high_tea", meal.high_tea)}
            </TabsContent>
            <TabsContent value="dinner">
              {renderMeal("dinner", meal.dinner)}
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-center hover:text-rose-500 w-full">
        <div className="w-full h-24 flex items-center justify-center space-x-2 border-dashed border-2 border-neutral-500 rounded-md">
          <Plus size={24} strokeWidth={3} />
          <span className="text-2xl font-normal">Add Meal</span>
        </div>
      </CardFooter>
    </Card>
  );
}
