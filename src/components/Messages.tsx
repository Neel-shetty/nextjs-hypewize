import { columns } from "./messages/columns";
import { DataTable } from "./messages/data-table";

export default function Messages() {
  const data = [
    {
      id: "728ed52f",
      country: "United States",
      ipAddress: "192.168.0.100",
      details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
      date: new Date(),
    },
    {
      id: "728ed52fdab",
      country: "United States",
      ipAddress: "192.168.0.100",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...",
      date: new Date(),
    },
    // ...
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        //@ts-ignore
        data={data}
      />
    </div>
  );
}
