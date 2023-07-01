import UsageCard from "@/components/usage-card";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div>
      <UsageCard title={'1500'} description={'Total Messages'}/>
    </div>
  );
};

export default page;
