import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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

export default function MealLogger({ meal = defaultData }: { meal?: Meals } = {}) {
  function renderMeal(
    mealType: keyof Meals,
    mealData: MealData[]
  ) {
    if (!mealData || mealData.length === 0) return null;

    return (
      <div className="">
        <p >
          {mealType.charAt(0).toUpperCase() + mealType.slice(1).replace("_", "-")}
        </p>
        <div>
          {mealData.map((item, index) => (
            <div className="parent" key={index}>
              <div>{item.food}</div>
              <div>{item.cal} kcal</div>
              {item.count > 0 ? (
                <div>{item.count} Pcs</div>
              ) : (
                <div>{item.amount} Grms</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Meals</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="all">ALL</TabsTrigger>
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="high_tea">High-Tea</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
          </TabsList>
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
        </Tabs>
      </CardContent>
      <CardFooter>
        <p>Add Meal</p>
      </CardFooter>
    </Card>
  );
}
