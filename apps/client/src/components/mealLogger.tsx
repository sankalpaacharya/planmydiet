import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
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
  function renderMeal(
    mealType: keyof Meals,
    mealData: MealData[]
  ) {
    if (!mealData || mealData.length === 0) return null;

    return (
      <div className="flex flex-col p-4 pt-0">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-semibold text-white">
            {mealType.charAt(0).toUpperCase() + mealType.slice(1).replace("_", "-")}
          </p>
          <p className="text-gray-500 text-base font-medium">
            {mealData.reduce((sum, item) => sum + item.cal, 0)} kcal
          </p>
        </div>

        <div className="space-y-4">
          {mealData.map((item, index) => (
            <div
              className="flex items-center justify-between bg-gray-600 bg-opacity-20 p-4 rounded-md shadow-md"
              key={index}
            >
              <div className="text-base font-medium text-slate-100 text-left">
                {item.food}
                <div className="text-sm text-gray-400 mt-1">
                  {item.count > 0 ? `${item.count} Pcs` : `${item.amount} Grms`}
                </div>
              </div>

              <div className="text-base font-normal text-slate-100">
                {item.cal} kcal
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card className="h-max">
      <CardHeader>
        <CardTitle className="text-2xl font-normal ">Today's Meals</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-[500px] text-center">
          <TabsList className="w-[500px] justify-around mb-4">
            <TabsTrigger value="all">ALL</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="high_tea">High-Tea</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
          </TabsList>
          <ScrollArea className="h-[330px] w-[500px] rounded-md">
            <TabsContent value="all">
              {(["breakfast", "lunch", "high_tea", "dinner"] as Array<keyof Meals>).map(
                (mealType) => (
                  <div key={mealType}>{renderMeal(mealType, meal[mealType])}</div>
                )
              )}
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
      <CardFooter className="flex justify-center ">
        <div className="w-[470px] p-3 h-24 flex items-center justify-center space-x-2 border-dashed border-2 border-neutral-500 rounded-md">
          <Plus size={24} strokeWidth={3} />
          <span className="text-2xl font-normal">Add Meal</span>
        </div>
      </CardFooter>
    </Card>
  );
}