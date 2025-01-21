import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

const defaultData = {
  consumedCal: 300,
  targetCal: 900,
  nutrients: {
    fats: {
      consumed: 120,
      target: 200,
      meals: {
        breakfast: 45,
        lunch: 75,
        highTea: 30,
        dinner: 50,
      },
    },
    carbs: {
      consumed: 120,
      target: 200,
      meals: {
        breakfast: 50,
        lunch: 70,
        highTea: 40,
        dinner: 40,
      },
    },
    proteins: {
      consumed: 300,
      target: 200,
      meals: {
        breakfast: 150,
        lunch: 150,
        highTea: 50,
        dinner: 100,
      },
    },
  },
};

interface MealData {
  breakfast: number;
  lunch: number;
  highTea: number;
  dinner: number;
}

interface NutrientData {
  consumed: number;
  target: number;
  meals: MealData;
}

const NutrientProgress = ({
  title,
  data,
}: {
  title: string;
  data: NutrientData;
}) => {
  return (
    <div className="w-full p-2">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="font-medium">
          {data.consumed}/{data.target}g
        </div>
      </div>
      <Progress
        value={(data.consumed * 100) / data.target}
        className="w-full h-2 mt-1"
      />

      <div className="mt-2 text-gray-500">
        {Object.entries(data.meals).map(
          ([meal, value]) =>
            value > 0 && (
              <div key={meal} className="flex justify-between">
                <span>{meal.charAt(0).toUpperCase() + meal.slice(1)}</span>
                <span>{value}g</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default function DailyProgress({ dailyData = defaultData }) {
  return (
    <Card className="w-80 h-max rounded-lg">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-normal text-center mb-3">
          Daily Progress
        </CardTitle>
        <CardDescription className="text-center">
          <div className="text-4xl font-bold text-slate-100">
            {dailyData.consumedCal}
          </div>
          <div className="text-gray-500">out of {dailyData.targetCal} kcal</div>
          <div className="flex justify-center">
            <Progress
              value={(dailyData.consumedCal * 100) / dailyData.targetCal}
              className="h-2 mt-3 w-[calc(100%-1rem)] max-w-[320px]"
            />
          </div>
        </CardDescription>
      </CardHeader>
      <ScrollArea className="w-full h-[405px] mb-6">
        <CardContent className="flex flex-col items-center gap-4">
          <NutrientProgress title="Fat" data={dailyData.nutrients.fats} />
          <NutrientProgress title="Carbs" data={dailyData.nutrients.carbs} />
          <NutrientProgress
            title="Protein"
            data={dailyData.nutrients.proteins}
          />
        </CardContent>
      </ScrollArea>
    </Card>
  );
}
