"use client";
import * as React from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SchoolSidebar from "@/components/school/school-sidebar";
import SchoolDashboardNav from "@/components/school/school-dashboard-nav";

export default function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <SidebarProvider>
          <SchoolSidebar/>
          <SidebarInset>
            <SchoolDashboardNav/>
            {children}
          </SidebarInset>
        </SidebarProvider>
  )
}


