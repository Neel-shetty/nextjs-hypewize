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
    </div>
  );
};

export default page;
