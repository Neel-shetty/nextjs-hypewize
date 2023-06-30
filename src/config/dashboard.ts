import { DashboardConfig } from "../../types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
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
