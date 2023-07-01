import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Edit, Trash2 } from "lucide-react";

export default function Content() {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-5">
        <Input className="w-full md:w-[89%]" placeholder="www.exampleWebsite.com" />
        <Button className="bg-[#2745FA] flex-1">+Add</Button>
      </div>
      {[1, 2, 3].map((item, index) => (
        <div className="bg-white w-full m-2 my-4 p-4" key={index}>
          <div className="flex w-full justify-between">
            <div className="items-center justify-center flex">
              <p>TheUIUXMinds.com</p>
            </div>
            <div className="flex gap-2 flex-row">
              <div className="w-12 h-12 bg-gray-50 rounded-full items-center flex justify-center">
                <Edit />
              </div>
              {/* <div></div> */}
              <div className="w-12 h-12 bg-gray-50 rounded-full items-center flex justify-center">
                <Trash2 className="text-red-500" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
