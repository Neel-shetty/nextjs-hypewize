import { Card } from "./ui/card";
import { CopyPlus } from "lucide-react";

export default function CreateProjectCard() {
  return (
    <Card className="m-2 flex flex-col px-3 py-3 h-[220px]">
      <div className="h-[100%] w-[100%] bg-[#F1F2F7] rounded-md flex items-center justify-center flex-col">
        <div className="text-[#2745FA] text-6xl mb-3">
          <CopyPlus className="text-xl" size={30} />
        </div>
        <div className="text-[#2745FA] text-xl">+ Create New Project</div>
      </div>
    </Card>
  );
}
