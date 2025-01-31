import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Ham } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { api } from "@/lib/axios";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const Route = createFileRoute("/_layout/diet/new")({
  component: RouteComponent,
});

type FormData = {
  goal: string;
  dietPreference: "veg" | "non-veg";
  activityLevel: "low" | "moderate" | "high";
  calorieIntake: number;
  foodAllergies: string;
  medicalCondition: string;
  budget: string;
};

function RouteComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    goal: "",
    dietPreference: "veg",
    activityLevel: "moderate",
    calorieIntake: 2000,
    foodAllergies: "",
    medicalCondition: "",
    budget: "none",
  });

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await api.post("/plan/create", formData);
      setIsLoading(false);
      console.log("response from the backend", response);
      console.log("Submitting form data:", formData);
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex space-x-2">
            <Ham />
            <span>Creating new Diet Plan</span>
          </CardTitle>
          <CardDescription>
            Please fill the respective input fields
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="goal">Goal</Label>
            <Input
              onChange={(e) =>
                setFormData({ ...formData, goal: e.target.value })
              }
              type="text"
              id="goal"
              placeholder="Weight loss 2 kg"
              value={formData.goal}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="dietPreference">Diet Preference</Label>
            <SelectDietPreference
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="activityLevel">Activity Level</Label>
            <SelectActivityLevel
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="calorieIntakeLimit">Calorie Intake Limit</Label>
            <Input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  calorieIntake: parseInt(e.target.value),
                })
              }
              type="number"
              id="calorieIntakeLimit"
              placeholder="2000"
              value={formData.calorieIntake}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="foodAllergies">Food Allergies (Optional)</Label>
            <Input
              onChange={(e) =>
                setFormData({ ...formData, foodAllergies: e.target.value })
              }
              type="text"
              id="foodAllergies"
              placeholder="Allergies"
              value={formData.foodAllergies}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="medicalCondition">
              Medical Condition (Optional)
            </Label>
            <Input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  medicalCondition: e.target.value,
                })
              }
              type="text"
              id="medicalCondition"
              placeholder="Medical Condition"
              value={formData.medicalCondition}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="medicalCondition">Budget</Label>
            <Input
              onChange={(e) =>
                setFormData({
                  ...formData,
                  budget: e.target.value,
                })
              }
              type="number"
              id="medicalCondition"
              placeholder="Medical Condition"
              value={formData.budget}
            />
          </div>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? <Loader className="animate-spin" /> : null}
            Create a Diet Plan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

interface SelectProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SelectDietPreference = ({ formData, setFormData }: SelectProps) => {
  return (
    <Select
      onValueChange={(preference: "veg" | "non-veg") =>
        setFormData((prev) => ({
          ...prev,
          dietPreference: preference,
        }))
      }
      value={formData.dietPreference}
      defaultValue="veg"
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Your Diet Preference" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Diet Plan</SelectLabel>
          <SelectItem key={"non-veg"} value="non-veg">
            Non-Veg
          </SelectItem>
          <SelectItem key={"veg"} value="veg">
            Veg
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

const SelectActivityLevel = ({ formData, setFormData }: SelectProps) => {
  return (
    <Select
      onValueChange={(activity: "low" | "moderate" | "high") =>
        setFormData((prev) => ({
          ...prev,
          activityLevel: activity,
        }))
      }
      value={formData.activityLevel}
      defaultValue="moderate"
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Your Activity Level" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Activity</SelectLabel>
          <SelectItem key={"low"} value="low">
            Low
          </SelectItem>
          <SelectItem key={"moderate"} value="moderate">
            Moderate
          </SelectItem>
          <SelectItem key={"high"} value="high">
            High
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default RouteComponent;
