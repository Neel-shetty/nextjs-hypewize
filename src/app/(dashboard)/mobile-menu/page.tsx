"use client";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { Layers, PieChart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";

export default function MobileMenu() {
  const path = usePathname();
  return (
    <div className="md:hidden min-h-screen p-5 bg-white w-full">
      <div className="flex flex-row gap-5">
        <img src="/profile.png" alt="profile" />
        <div className="">
          <p className="font-bold text-lg">John Isaq</p>
          <p className="text-gray-500">john.mail@gmail.com</p>
        </div>
      </div>
      <Separator className="my-4" />
      <nav className="flex flex-col gap-5 px-3 w-full">
        <Link
          href={"/projects"}
          className={
            path.includes("/projects")
              ? "flex flex-row gap-5 bg-[#F7F8FA] rounded-md w-full px-2 py-3"
              : "flex flex-row gap-5 w-full py-3 px-2"
          }
        >
          <Layers />
          <p className="font-bold text-lg">Projects</p>
        </Link>
        <Link
          href={"/usage"}
          className={
            path.includes("/usage")
              ? "flex flex-row gap-5 bg-[#F7F8FA] w-full px-2 py-3"
              : "flex flex-row gap-5 w-full py-3 px-2"
          }
        >
          <PieChart />
          <p className="font-bold text-lg">Usage</p>
        </Link>
        <Link
          href={"/billing"}
          className={
            path.includes("/billing")
              ? "flex flex-row gap-5 bg-[#F7F8FA] w-full px-2 py-3"
              : "flex flex-row gap-5 w-full py-3 px-2"
          }
        >
          <Icons.billing />
          <p className="font-bold text-lg">Billing</p>
        </Link>
        <Link
          href={"/account"}
          className={
            path.includes("/account")
              ? "flex flex-row gap-5 bg-[#F7F8FA] w-full px-2 py-3"
              : "flex flex-row gap-5 w-full py-3 px-2"
          }
        >
          <Icons.user />
          <p className="font-bold text-lg">Account</p>
        </Link>
        <Link
          href={"/support"}
          className={
            path.includes("/support")
              ? "flex flex-row gap-5 bg-[#F7F8FA] w-full px-2 py-3"
              : "flex flex-row gap-5 w-full py-3 px-2"
          }
        >
          <MessageSquare />
          <p className="font-bold text-lg">Chat With Us</p>
        </Link>
      </nav>
    </div>
  );
}
