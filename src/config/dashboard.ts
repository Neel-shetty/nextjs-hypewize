import { DashboardConfig } from "../../types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Usage",
      href: "/usage",
    },
    {
      title: "Billing",
      href: "/billing",
    },
    {
      title: "Account",
      href: "/account",
    },
  ],
  sidebarNav: [
    {
      title: "Projects",
      href: "/projects",
      icon: "post",
    },
    {
      title: "Usage",
      href: "/usage",
      icon: "pieChart",
    },
    {
      title: "Billing",
      href: "/billing",
      icon: "billing",
    },
    {
      title: "Account",
      href: "/account",
      icon: "user",
    },
  ],
};
