import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="mx-6 mt-3 h-screen">
      <div className="pb=5">
        <p className="text:sm text-[#7A7E8F]">Your Name</p>
        <Input />
      </div>
      <div className="hidden h-10"></div>
      <p className="text:sm text-[#7A7E8F]">Email</p>
      <Input />
      <div className="w-full justify-end flex align-middle">
        <div className="mb-5 gap-4 flex-row">
          <Button variant={"secondary"} size={"lg"} className="bg-white">
            Cancel
          </Button>
          {/* <div className="w-[10px]"></div> */}
          <Button className="mt-5 bg-[#2745FA]" variant="default" size="lg">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
