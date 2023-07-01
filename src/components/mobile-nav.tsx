"use client";
import * as React from "react";
import Link from "next/link";

import { MainNavItem } from "../../types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useLockBody } from "@/hooks/use-lock-body";
import { Icons } from "@/components/icons";
import { Menu } from "lucide-react";
import MobileMenu from "@/app/(dashboard)/mobile-menu/page";
import { usePathname } from "next/navigation";

interface MobileNavProps {
  items: MainNavItem[];
  children?: React.ReactNode;
}

export function MobileNav({ items, children }: MobileNavProps) {
  useLockBody();

  return (
    <div
      className={cn(
        "fixed bg-white inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto animate-in slide-in-from-left -80 md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md">
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {/* {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))} */}
          <MobileMenu />
        </nav>
        {children}
      </div>
    </div>
  );
}
