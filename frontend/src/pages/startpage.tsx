import { useState } from "react";
import Start1 from "@/components/form/start1";
import Start2 from "@/components/form/start2";
import ProgressBar from "@/components/form/progressBar";
import Loading from "@/components/form/loading";
import { useNavigate } from "react-router-dom";

export default function StartPage() {
  const navigate = useNavigate();
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
    activitylevel: ""
  });

  const handleNext = (data: { height: string; weight: string; age: string; gender: string }) => {
    setFormData((prevData) => ({ ...prevData, ...data }));

    setCurrentPage(2);
  };

  const handleBack = () => {
    setCurrentPage(1);
  };

  const handleSubmit = async (data: { dietPreference: string; duration: string; healthGoal: string; activitylevel: string }) => {
    setLoading(true);
    
    const completeFormData = { ...formData, ...data };
    console.log(completeFormData);
    try {
      const response = await fetch("http://localhost:3000/plan/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(completeFormData),
      });

      if (response.status === 201) {
        navigate("/home");
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("Failed to submit form. Please try again.");
      }
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
            <Start2
              onSubmit={handleSubmit}
              formData={formData}
              onBack={handleBack}
            />
          )}
        </div>
      )}
    </div>
  );
}
