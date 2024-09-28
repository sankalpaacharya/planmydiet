// Start2.tsx
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Start2Props {
  onSubmit: () => void;
  formData: {
    height: string;
    weight: string;
    age: string;
    gender: string;
    dietPreference: string;
    duration: string;
    healthGoal: string;
    activity: string;
  };
  onBack: () => void;
}

export default function Start2({ onSubmit, formData, onBack }: Start2Props) {
  const [activity,setActivity] = useState(formData.activity);
  const [dietPreference, setDietPreference] = useState(formData.dietPreference);
  const [duration, setDuration] = useState(formData.duration);
  const [healthGoal, setHealthGoal] = useState(formData.healthGoal);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can implement the POST request
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-white mb-1">Diet Preference:</label>
        <select
          value={dietPreference}
          onChange={(e) => setDietPreference(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
        >
          <option value="">Select your diet preference</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-white mb-1">Duration (weeks):</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white mb-1">Primary Health Goal:</label>
        <input
          type="text"
          value={healthGoal}
          onChange={(e) => setHealthGoal(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <label className="text-white mb-1">Activity Level:</label>
      <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
        >
          <option value="">Select your activity level</option>
          <option value="less than average ">less than average </option>
          <option value="Moderate">Moderate </option>
          <option value="High">High</option>
        </select>
      <div className="flex justify-between mt-6">
        <Button 
          type="button" 
          onClick={onBack} 
          className="text-gray-200 bg-green-900 rounded-full flex items-center justify-center gap-2 p-3 focus:ring-2 focus:ring-green-500"
        >
          Back
        </Button>
        <Button 
          type="submit" 
          className="text-gray-200 bg-green-900 rounded-full flex items-center justify-center gap-2 p-3 focus:ring-2 focus:ring-green-500"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
