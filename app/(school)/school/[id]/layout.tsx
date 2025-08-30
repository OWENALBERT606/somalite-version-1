// "use client";
import * as React from "react";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import SchoolSidebar from "@/components/school/school-sidebar";
import SchoolDashboardNav from "@/components/school/school-dashboard-nav";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
import { redirect } from "next/navigation";
import { getAuthenticatedUser } from "@/config/useAuth";
import { getSchoolsByAdminId } from "@/actions/schools";
// import { getAuthenticatedUser } from "@/config/useAuth";

export default async function DashboardLayout({children,params}:{children:React.ReactNode,params: Promise<{ id: string }>}) {

   const session = await getServerSession(authOptions);
    if (!session) {
      redirect("/login");
    }

    const id=(await params).id;
    
    
        const userData = await getAuthenticatedUser();

        console.log(userData)
        const userId=userData?.id;
    
        const schoolData= await getSchoolsByAdminId(userId)
        const school=schoolData[0];
        console.log(school)


        const role=userData?.roles[0]?.roleName;
        if(role!=="schooladmin" && role!=="teacher"){
          redirect("/");}

        console.log(role)

  return (
    <SidebarProvider>
          <SchoolSidebar school={school} session={session}/>
          <SidebarInset>
            {/* <SchoolDashboardNav/> */}
            {children}
          </SidebarInset>
        </SidebarProvider>
  )
}


