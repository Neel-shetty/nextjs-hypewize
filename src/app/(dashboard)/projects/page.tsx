import { FC } from "react";
import { ProjectCard } from "@/components/project-card";
import CreateProjectCard from "@/components/create-project-card";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const date = new Date();
  return (
    <div className="mx-6 mt-3 min-h-screen">
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 overflow-auto ">
          <CreateProjectCard />
          {[1, 2, 3, 4, 5].map((i) => {
            return (
              <ProjectCard
                key={i}
                title="Project name 1"
                description="Lorizzle dizzle amconsectetizzle adipiscing elit. Sed fo shizzle my nizzle, crunk vel, dizzle own elit. Sed fo shizzl..."
                createdAt={date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
