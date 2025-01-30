// components/ui/checkbox.tsx
import { CheckCircle, Circle } from "lucide-react";

interface CheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
}

export const Checkbox = ({ id, checked, onCheckedChange }: CheckboxProps) => {
  return (
    <button
      id={id}
      onClick={onCheckedChange}
      className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-300"
    >
      {checked ? (
        <CheckCircle className="text-rose-500 w-5 h-5" />
      ) : (
        <Circle className="text-gray-300 w-5 h-5" />
      )}
    </button>
  );
}