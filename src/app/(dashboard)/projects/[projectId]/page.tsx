"use client";

import Messages from "@/components/Messages";
import { Tabs, Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary: "bg-red-500 hover:bg-red-600",
    },
  },
  tab: {
    tablist: {
      tabitem: {
        styles: {
          underline: {
            active: {
              on: "text-[#2745FA] rounded-t-lg border-b-2 border-[#2745FA] active dark:text-cyan-500 dark:border-cyan-500",
              off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300",
            },
            base: "rounded-t-lg",
          },
        },
      },
    },
  },
};

export default function ProjectInfo() {
  return (
    <div className="mt-3 mx-6 h-screen">
      <div>
        <h1 className="text-2xl font-bold">Sapphire</h1>
      </div>
      <p className="text-[#7A7E8F]">
        You can edit existing projects or create new projects below
      </p>
      <div className="mt-3">
        <Flowbite theme={{ theme: customTheme }}>
          <Tabs.Group aria-label="Tabs with icons" style="underline">
            <Tabs.Item active title="Info">
              <p>
                This is
                <span className="font-medium text-gray-800 dark:text-white">
                  info tabs associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </Tabs.Item>
            <Tabs.Item title="Messages">
              <Messages />
            </Tabs.Item>
            <Tabs.Item title="Content">
              <p>
                This is
                <span className="font-medium text-gray-800 dark:text-white">
                  Settings tabs associated content
                </span>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </Tabs.Item>
          </Tabs.Group>
        </Flowbite>
      </div>
    </div>
  );
}
