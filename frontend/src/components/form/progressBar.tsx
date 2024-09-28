// ProgressBar.tsx
interface ProgressBarProps {
    currentPage: number;
    onStepClick: (step: number) => void;
  }
  
  export default function ProgressBar({ currentPage, onStepClick }: ProgressBarProps) {
    return (
      <div className="relative mb-4">
        <div className="flex justify-between mb-2">
          <div
            className={`cursor-pointer ${currentPage === 1 ? "text-green-400" : "text-gray-600"}`}
            onClick={() => onStepClick(1)}
          >
            Step 1
          </div>
          <div
            className={`cursor-pointer ${currentPage === 2 ? "text-green-400" : "text-gray-600"}`}
            onClick={() => onStepClick(2)}
          >
            Step 2
          </div>
        </div>
        <div className="w-full h-1 bg-gray-600">
          <div
            className={`h-full bg-green-400`}
            style={{ width: `${(currentPage - 1) * 100}%` }}
          />
        </div>
      </div>
    );
  }
  