import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Check } from "lucide-react";

export default function PlanCard({
  title,
  cost,
  features,
}: {
  title: string;
  cost: number;
  features: string[];
}) {
  return (
    <Card className="flex flex-col m-2 p-5">
      <div className="mx-auto items-center">
        <div className="font-bold text-xl ">{title}</div>
      </div>
      <div className="mx-auto items-center mb-3">
        <div className="font-bold text-3xl ">${cost}/mo</div>
      </div>
      <div className="items-center">
        {features.map((feature: string, i: number) => (
          <div className="flex gap-2 flex-row w-[100%] text-[#2745FA]" key={i}>
            <Check />
            <div className="text-black">{feature}</div>
          </div>
        ))}
      </div>
      <Button className="bg-[#2745FA] mt-3" variant={"default"}>
        Manage Plan
      </Button>
    </Card>
  );
}
