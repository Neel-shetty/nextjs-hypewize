import { notFound } from "next/navigation";

import { dashboardConfig } from "@/config/dashboard";
// import { getCurrentUser } from "@/lib/session";
import { MainNav } from "@/components/main-nav";
import { DashboardNav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { UserAccountNav } from "@/components/user-account-nav";
import { Search } from "@/components/search";
import { Icons } from "@/components/icons";
import { Search as SearchIcon, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser();

  // if (!user) {
  //   return notFound();
  // }

  return (
    <div className="flex min-h-screen flex-col">
      {/* <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              name: "test name",
              image: "",
              email: "test@test.com",
            }}
          />
        </div>
      </header> */}
      <div className=" w-full grid flex-1  md:grid-cols-[200px_1fr] ">
        <aside className="hidden w-[200px] flex-col md:flex justify-start bg-[#040A27]">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex flex-1 flex-col overflow-hidden">
          <header className="sticky top-0 z-40 border-b bg-white">
            <div className=" px-8 flex h-16 items-center justify-between py-4">
              <MainNav items={dashboardConfig.mainNav} />
              <div className="flex flex-row gap-3 items-center justify-between">
                {/* <Search /> */}
                <div>
                  <Button className="px-0 mx-2" variant={"link"}>
                    <SearchIcon className="black" size={20} />
                  </Button>
                  <Button className="px-0 mx-2  " variant={"link"}>
                    <Bell className="black" size={20} />
                  </Button>
                </div>
                <div className="w-[1px] bg-black h-5"></div>
                <UserAccountNav
                  user={{
                    name: "test name",
                    image: "",
                    email: "test@test.com",
                  }}
                />
              </div>
            </div>
          </header>
          <div className="bg-[#F7F8FA]">{children}</div>
        </main>
      </div>
      {/* <SiteFooter className="border-t" /> */}
    </div>
  );
}
