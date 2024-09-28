// StartPage.tsx
import { useState } from "react";
import Start1 from "@/components/form/start1";
import Start2 from "@/components/form/start2";
import ProgressBar from "@/components/form/progressBar";

export default function StartPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    dietPreference: "",
    duration: "",
    healthGoal: ""
  });

  const handleNext = (data: { height: string; weight: string; age: string; gender: string }) => {
    setFormData({ ...formData, ...data });
    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleSubmit = () => {
    // post logic over here
    console.log("Submit form data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-black via-gray-900 to-black font-sans">
      <div className="w-full max-w-2xl p-8 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg border border-gray-700">
        <ProgressBar currentPage={currentPage} onStepClick={setCurrentPage} />
        {currentPage === 1 ? (
          <Start1 onNext={handleNext} formData={formData} />
        ) : (
          <Start2 onSubmit={handleSubmit} formData={formData} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}
