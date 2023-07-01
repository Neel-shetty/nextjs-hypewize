import PlanCard from "@/components/plan-card";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" mx-6 mt-3 h-screen">
      <div className="grid grid-cols-3 gap-4">
        <PlanCard
          title={"Plan Title"}
          features={[
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
          ]}
          cost={29}
        />
        <PlanCard
          title={"Plan Title"}
          features={[
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
            "lorem ipsum",
          ]}
          cost={29}
        />
      </div>
    </div>
  );
};

export default page;
