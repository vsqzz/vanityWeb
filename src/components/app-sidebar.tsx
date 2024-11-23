"use client"

import * as React from "react"
import {
  FolderKeyIcon,
} from "lucide-react"

import Image from "next/image"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Serials",
      url: "#",
      icon: FolderKeyIcon,
      isActive: true,
      items: [
        {
          title: "Create Serial",
          url: "/dashboard/serials/create",
        },
        {
          title: "Modify Serial",
          url: "/dashboard/serials/modify",
        }
      ],
    }
  ],
}

export function AppSidebar({ session_data }: { session_data: {
  name: string
  email: string
  avatar: string
} }) {
  return (
    <Sidebar variant="inset">
      <SidebarHeader className="bg-black">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                  <Image src={"/icon.png"} alt="Vanityﾒ𝟶 logo" width={256} height={256} className="size-6" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Vanityﾒ𝟶</span>
                  <span className="truncate text-xs">dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-black">
        <NavMain title="Serial Managment" items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-black">
        <NavUser user={session_data} />
      </SidebarFooter>
    </Sidebar>
  )
}
