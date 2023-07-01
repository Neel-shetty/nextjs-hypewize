import { Card } from "./ui/card";
import { Mail } from "lucide-react";

export default function UsageCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon?: any;
}) {
  return (
    <Card className="flex flex-col items-center justify-center w-[240px] p-5">
      <div className="w-[49px] h-[49px] opacity-20 bg-blue-600 bg-opacity-40 rounded-full ">
        {/* <Mail className="w-[40px] h-[40px] text-[#2745FA] z-10" /> */}
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div>{description}</div>
    </Card>
  );
}
