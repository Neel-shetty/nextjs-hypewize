import PlanCard from "@/components/plan-card";
import { FC } from "react";

interface pageProps {}

export const metadata = {
  viewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
  },
};

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" mx-6 mt-3 min-h-screen">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
