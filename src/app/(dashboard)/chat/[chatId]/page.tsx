import Message from "@/components/message";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export default function Chat() {
  return (
    <div className="mx-6 mt-3 bg-[#F7F8FA] pb-10 ">
      <div className="h-[600px] flex flex-col">
        <div className="h-[100px] bg-[#2745FA] rounded-t-lg flex flex-col justify-center items-center">
          <p className="text-white font-bold text-xl">Name</p>
          <p className="text-white font-medium">AI Assistant</p>
        </div>
        <div className="flex-1 bg-white overflow-y-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Message
              key={item}
              align={item % 2 === 0 ? "right" : "left"}
              name="Name"
              time="12:00AM"
              message="We work to make sure your business is available when your customers want to shop.  available when your customers want to shop."
            />
          ))}
        </div>
        <div className="align-bottom gap-5 flex flex-row">
          <Input width={""} />
          <Button className="bg-[#2745FA]">
            <Send />
          </Button>
        </div>
      </div>
    </div>
  );
}
