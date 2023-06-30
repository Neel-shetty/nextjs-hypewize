import { Icons } from "./icons";
import { Card, CardTitle } from "./ui/card";
import { FC } from "react";
import { formatDistance, subDays } from "date-fns";

interface ProjectCardProps {
  title: string;
  description: string;
  createdAt: Date;
}

export function ProjectCard({
  title,
  description,
  createdAt,
}: ProjectCardProps) {
  return (
    <Card className="m-2 flex flex-col px-3 py-3 h-[220px]">
      <div className="flex flex-row justify-start gap-x-2 my-3 line-clamp-1">
        <Icons.gitHub className="w-6 h-6" />
        <span className="text-xl">{title}</span>
      </div>
      <div className="flex-1 overflow-hidden pb-3">{description}</div>
      <div className="line-clamp-1">
        Created{" "}
        {formatDistance(createdAt, new Date(), {
          addSuffix: true,
        })}
      </div>
    </Card>
  );
}
