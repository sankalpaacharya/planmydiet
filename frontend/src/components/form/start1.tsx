// Start1.tsx
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Start1Props {
  onNext: (data: { height: string; weight: string; age: string; gender: string }) => void;
  formData: { height: string; weight: string; age: string; gender: string };
}

export default function Start1({ onNext, formData }: Start1Props) {
  const [height, setHeight] = useState(formData.height);
  const [weight, setWeight] = useState(formData.weight);
  const [age, setAge] = useState(formData.age);
  const [gender, setGender] = useState(formData.gender);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ height, weight, age, gender });
  };

  return (
    <form onSubmit={handleNext} className="flex flex-col gap-4">
      <div className="flex flex-col">
        <label className="text-white mb-1">Height (cm):</label>
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white mb-1">Weight (kg):</label>
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white mb-1">Age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-white mb-1">Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <Button type="submit" className="mt-6 text-gray-200 bg-green-900 rounded-full flex items-center justify-center gap-2 p-3 focus:ring-2 focus:ring-green-500">
        Next
      </Button>
    </form>
  );
}
