import { useState } from "react";
import Start1 from "@/components/form/start1";
import Start2 from "@/components/form/start2";
import ProgressBar from "@/components/form/progressBar";
import Loading from "@/components/form/loading";

export default function StartPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    age: "",
    gender: "",
    dietPreference: "",
    duration: "",
    healthGoal: "",
    activity:""
  });

  const handleNext = (data: { height: string; weight: string; age: string; gender: string }) => {
    setFormData({ ...formData, ...data });
    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Simulate a POST request (replace this with your actual API call)
      console.log("Submit form data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 100000)); // 10 seconds
      
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen p-4 bg-gradient-to-br from-black via-gray-900 to-black font-sans">
      {loading ? (
        <Loading />
      ) : (
        <div className="w-full max-w-2xl p-8 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg border border-gray-700">
          <ProgressBar currentPage={currentPage} onStepClick={setCurrentPage} />
          {currentPage === 1 ? (
            <Start1 onNext={handleNext} formData={formData} />
          ) : (
            <Start2 onSubmit={handleSubmit} formData={formData} onBack={handleBack} />
          )}
        </div>
      )}
    </div>
  );
}
