import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Beef, Carrot, User, Vegan } from "lucide-react";

const PersonalData = {
  diet_prefrence: "Vegetarian",
  height: 180,
  weight: 70,
  age: 20,
  gender: "Male",
  medical_condition: "Diabetes",
  food_allergies: "NA",
  budget: 500,
	activity_level:"Moderate"
};

interface PersonalDataProps {
  diet_prefrence?: string;
  height?: number;
  weight?: number;
  age?: number;
  gender?: string;
  medical_condition?: string;
  food_allergies?: string;
  budget?: number;
	activity_level?:string;
}

export default function PersonalDetails(props: PersonalDataProps) {
  const {
    diet_prefrence,
    height,
    weight,
    age,
    gender,
    medical_condition,
    food_allergies,
    budget,
		activity_level,
  } = {
    ...PersonalData,
    ...props,
  };

  const details = [
    { label: "Height", value: `${height} cm` },
    { label: "Weight", value: `${weight} kg` },
    { label: "Age", value: `${age} years` },
    { label: "Gender", value: `${gender}` },
    {
      label: "Medical Condition",
      value: medical_condition,
      show: medical_condition !== "NA",
    },
    {
      label: "Food Allergies",
      value: food_allergies,
      show: food_allergies !== "NA",
    },
    { label: "Budget", value: `Rs. ${budget}` },
    { label: "Activity Level", value: `${activity_level}` },
  ];

  return (
    <Card className="w-full px-2">
      <CardHeader>
        <CardTitle>
          <div className="text-lg font-bold flex gap-4">
            <User className="text-rose-600" size={25} />
            Personal Details
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
          <div className="flex justify-between mb-5 items-center">
            <span className="text-xl font-semibold ">Diet Prefrence : </span>
            <Badge className="text-sm max-h-8">
              {diet_prefrence ? (
              diet_prefrence.toLowerCase().includes("vegan") ? (
                <>
                <span className="hidden xs:block"> Vegan</span> <Vegan className="inline ml-2" />
                </>
              ) : diet_prefrence.toLowerCase().includes("vegetarian") ? (
                <>
                <span className="hidden xs:block"> Vegetarian</span> <Carrot className="inline ml-2" />
                </>
              ) : diet_prefrence.toLowerCase().includes("non-vegeterian") ? (
                <>
                <span className="hidden xs:block"> Non-Vegeterian</span> <Beef className="inline ml-2" />
                </>
              ) : (
                diet_prefrence
              )
              ) : (
              "No Diet Set"
              )}
            </Badge>
          </div>
        {details
          .filter((detail) => detail.show !== false)
          .map((detail, index) => (
            <div key={index} className="flex justify-between">
              <span >{detail.label} :</span>
              <span className="font-light">{detail.value}</span>
            </div>
          ))}
      </CardContent>
    </Card>
  );
}
