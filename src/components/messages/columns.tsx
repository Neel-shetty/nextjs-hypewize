"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Flag } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Messages = {
  id: string;
  country: string;
  ipAddress: string;
  details: string;
  Date: Date;
};

export const columns: ColumnDef<Messages>[] = [
  {
    accessorKey: "country",
    header: "Country",
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <img src={"/flag.png"} />
        </div>
      );
    },
  },
  {
    accessorKey: "ipAddress",
    header: "IP Address",
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date: Date = row.getValue("date");
      return (
        <div className="flex flex-col items-center justify-center">
          <p>
            {format(date, "MMM")}
            {","}
            {format(date, "dd")}
            {","}
            {format(date, "yyyy")}
          </p>
          <p className="text-[#808080] text-xs">{format(date, "p")}</p>
        </div>
      );
    },
  },
];
