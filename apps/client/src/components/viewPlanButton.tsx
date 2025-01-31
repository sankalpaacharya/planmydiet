import { Button } from "./ui/button.tsx";
import { Download } from "lucide-react";

export default function viewPlan() {
  return (
    <a href="../../public/PDF.pdf" download>
      <Button className="flex items-center">
        <Download size={15} />
        Monthly Report
      </Button>
    </a>
  );
}
