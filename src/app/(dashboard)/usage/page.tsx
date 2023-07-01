import UsageCard from "@/components/usage-card";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen mx-6 mt-3">
      <p className="mb-2 ml-1">Total</p>
      <div className="flex flex-row gap-5">
        <UsageCard title={"1500"} description={"Total Messages"} />
        <UsageCard title={"358"} description={"Total Projects"} />
        <UsageCard title={"15"} description={"Total Content "} />
      </div>
      <p className="mb-2 ml-1 mt-5">For This Month</p>
      <div className="flex flex-row gap-5">
        <UsageCard title={"1500"} description={"Total Messages"} />
        <UsageCard title={"358"} description={"Total Projects"} />
        <UsageCard title={"15"} description={"Total Content "} />
      </div>
    </div>
  );
};

export default page;
