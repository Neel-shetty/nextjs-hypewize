"use client";

import { ColumnDef } from "@tanstack/react-table";

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
  },
];
