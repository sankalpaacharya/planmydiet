import React from "react";
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

type MealType = "breakfast" | "lunch" | "high_tea" | "dinner";

interface MealItem {
  food: string;
  cal: number;
  amount: number;
  count: number;
}

interface MealData {
  [key: string]: MealItem[];
}

const MEAL_TYPES: MealType[] = ["breakfast", "lunch", "high_tea", "dinner"];

const DEFAULT_MEALS: MealData = {
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

// Components
const MealItemCard: React.FC<{ item: MealItem }> = ({ item }) => (
  <div className="flex items-center justify-between bg-gray-600 bg-opacity-20 p-3 rounded-md">
    <div className="text-base font-medium text-left">
      {item.food}
      <div className="text-sm text-gray-400 mt-1">
        {item.count > 0 ? `${item.count} Pcs` : `${item.amount} Grms`}
      </div>
    </div>
    <div className="text-base font-normal">{item.cal} kcal</div>
  </div>
);

const MealSection: React.FC<{ type: MealType; items: MealItem[] }> = ({
  type,
  items,
}) => {
  const totalCalories = items.reduce((sum, item) => sum + item.cal, 0);
  const formattedTitle =
    type.charAt(0).toUpperCase() + type.slice(1).replace("_", "-");

  if (!items || items.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center">
        No meals logged for {formattedTitle}.
      </p>
    );
  }

  return (
    <div className="w-full flex flex-col pb-6 px-5">
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">{formattedTitle}</p>
        <p className="text-gray-500 text-base font-medium">
          {totalCalories} kcal
        </p>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <MealItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const AddMealButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div
    onClick={onClick}
    className="w-full h-24 flex items-center justify-center space-x-2 border-dashed border-2 border-neutral-500 rounded-md cursor-pointer hover:text-rose-500 hover:border-rose-500 transition-colors"
  >
    <Plus size={24} strokeWidth={3} />
    <span className="text-2xl font-normal">Add Meal</span>
  </div>
);

interface MealLoggerProps {
  meals?: MealData;
  onAddMeal?: () => void;
}

const MealLogger: React.FC<MealLoggerProps> = ({
  meals = DEFAULT_MEALS,
  onAddMeal,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Today's Meals</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="py-5 justify-around mb-4 w-full overflow-x-scroll xs:overflow-clip">
            <TabsTrigger className="text-md" value="all">
              ALL
            </TabsTrigger>
            {MEAL_TYPES.map((type) => (
              <TabsTrigger key={type} value={type} className="text-md">
                {type.charAt(0).toUpperCase() + type.slice(1).replace("_", "-")}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollArea className="w-full h-[23rem] rounded-md mb-2">
            <TabsContent value="all">
              {MEAL_TYPES.map((type) => (
                <MealSection key={type} type={type} items={meals[type]} />
              ))}
            </TabsContent>
            {MEAL_TYPES.map((type) => (
              <TabsContent key={type} value={type}>
                <MealSection type={type} items={meals[type]} />
              </TabsContent>
            ))}
          </ScrollArea>
        </Tabs>
      </CardContent>
      <CardFooter>
        <AddMealButton onClick={onAddMeal} />
      </CardFooter>
    </Card>
  );
};

export default MealLogger;
