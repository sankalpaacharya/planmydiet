import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function NutritionBadge() {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-black via-gray-900 to-black font-sans">
      <div className="w-full max-w-2xl p-8 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg border border-gray-700">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 text-center text-4xl font-bold mb-6 transition-transform transform hover:scale-105">
          Welcome
        </h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-white mb-1">Height (cm):</label>
            <input
              type="text"
              className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Weight (kg):</label>
            <input
              type="text"
              className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Age:</label>
            <input
              type="text"
              className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Gender:</label>
            <select className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
              <option className="text-gray-400" value="">
                Select your gender
              </option>
              <option className="text-white" value="male">
                Male
              </option>
              <option className="text-white" value="female">
                Female
              </option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Diet Preference:</label>
            <select className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none">
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
              className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Primary Health Goal:</label>
            <input
              type="text"
              className="p-3 border-none rounded-md bg-gray-900 text-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <Button className="mt-6 text-gray-200 bg-green-900 rounded-full flex items-center justify-center gap-2 p-3 focus:ring-2 focus:ring-green-500">
            Start
            <ChevronRight />
          </Button>
        </form>
      </div>
    </div>
  );
}
