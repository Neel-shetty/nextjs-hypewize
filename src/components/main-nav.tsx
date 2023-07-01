"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

import { MainNavItem } from "../../types";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const path = usePathname();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const navigation = useRouter();

  function getPageTitle() {
    const name = path.split("/")[1];
    const title = name.charAt(0).toUpperCase() + name.slice(1);
    return title;
  }

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          <span
            className={
              "flex items-center text-2xl font-semibold transition-colors sm:text-sm"
            }
          >
            {getPageTitle()}
          </span>
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
          // navigation.push("/mobile-menu");
        }}
      >
        {showMobileMenu ? <Icons.close /> : <Menu />}
        {/* <span className="font-bold">Menu</span> */}
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
