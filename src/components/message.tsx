import { cn } from "@/lib/utils";

export default function Message({
  align = "right",
  message,
  time,
  name,
}: {
  align: "right" | "left";
  message: string;
  time: string;
  name: string;
}) {
  return (
    <div className="flex flex-row w-full justify-center items-center">
      {/* <div> */}
      <div
        className={
          align === "right"
            ? "hidden "
            : "relative h-full align-middle justify-center items-center mt-5"
        }
      >
        <div className="w-[30.42px] h-[22.55px] bg-blue-600 rounded border border-zinc-200" />
        <div className="w-[12.41px] left-[9.73px] top-[2.94px] absolute text-white text-[13.726423263549805px] font-medium capitalize">
          K
        </div>
      </div>
      {/* </div> */}
      <div
        className={
          align === "right"
            ? "w-full flex flex-col justify-end m-3 items-end"
            : "w-full flex flex-col justify-end m-3 items-start"
        }
      >
        <div className="mx-2 mb-2 text-slate-600 text-opacity-60 text-[11.76550579071045px] font-medium leading-none">
          {name}
        </div>
        <div
          className={
            align === "right"
              ? "w-[60%] bg-[#4F90F0] text-white justify-end items-end  rounded-md rounded-bl-sm p-3"
              : "w-[60%] bg-[#F0F2F5] text-black justify-start  rounded-md rounded-bl-sm p-3"
          }
        >
          <p className={align === "right" ? "" : ""}>{message}</p>
        </div>
        <div
          className={
            align === "right" ? "" : "justify-end w-[60%] flex items-end"
          }
        >
          <div className="mr-2 mt-2 text-slate-600 text-opacity-60 text-[11.76550579071045px] font-medium leading-none">
            {time}
          </div>
        </div>
      </div>
    </div>
  );
}
