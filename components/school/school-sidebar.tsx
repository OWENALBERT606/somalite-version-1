"use client"
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
  import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
  } from "@/components/ui/sidebar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

  import {
    BadgeCheck,
    Bell,
    BookOpen,
    Bot,
    ChevronRight,
    ChevronsUpDown,
    CreditCard,
    Folder,
    LogOut,
    Map,
    PieChart,
    Settings2,
    Sparkles,
    SquareTerminal,
    Users2,
  } from "lucide-react";
// import Logo from '@/components/Logo';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UserDropdownMenu } from '../UserDropdownMenu';
  

export default function SchoolSidebar({session,school}:{session:any,school:any}) {
    const router = useRouter();

  const sidebarLinks = [
    {
      title: "📊 Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive:true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
      ],
    },
    {
      title: "👨‍🎓 Student Management",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Student Directory",
          url: "/dashboard/users/students",
        },
        {
          title: "Attendance",
          url: "/students/attendance",
        },
        {
          title: "Results",
          url: "#",
        },
      ],
    },
    {
      title: "Parents Management",
      url: "#",
      icon: Users2,
      items: [
        {
          title: "Parents",
          url: "/dashboard/users/parents",
        },
      ],
    },
    {
      title: "📚 Academics",
      url: "/dashboard/academics",
      icon: BookOpen,
      items: [
        {
          title: "Classes and streams",
          url: "/dashboard/academics/classes",
        },
        {
          title: "Examinations",
          url: "#",
        },
        {
          title: "Assignments",
          url: "#",
        },
        {
          title: "Lessons",
          url: "#",
        },
        {
          title: "Report Cards",
          url: "#",
        },
        {
          title: "Attendance",
          url: "#",
        },
      ],
    },
    // {
    //   title: "👥 Staff Management",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "Teachers",
    //       url: "#",
    //     },
    //     {
    //       title: "Attendance",
    //       url: "#",
    //     },
    //     {
    //       title: "Leave Management",
    //       url: "#",
    //     },
    //     {
    //       title: "Performance",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "💬 Communication",
    //   url: "#",
    //   icon: Bell,
    //   items: [
    //     {
    //       title: "Messages",
    //       url: "#",
    //     },
    //     {
    //       title: "Announcements",
    //       url: "#",
    //     },
    //     {
    //       title: "Events",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "💰 Finance",
    //   url: "#",
    //   icon: CreditCard,
    //   items: [
    //     {
    //       title: "Fee Management",
    //       url: "#",
    //     },
    //     {
    //       title: "Payments",
    //       url: "#",
    //     },
    //     {
    //       title: "Scholarships",
    //       url: "#",
    //     },
    //     {
    //       title: "Reports",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "🚌 Transport",
    //   url: "#",
    //   icon: Map,
    //   items: [
    //     {
    //       title: "Routes",
    //       url: "#",
    //     },
    //     {
    //       title: "Tracking",
    //       url: "#",
    //     },
    //     {
    //       title: "Drivers",
    //       url: "#",
    //     },
    //     {
    //       title: "Maintenance",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "📦 Resources",
    //   url: "#",
    //   icon: Folder,
    //   items: [
    //     {
    //       title: "Library",
    //       url: "#",
    //     },
    //     {
    //       title: "Inventory",
    //       url: "#",
    //     },
    //     {
    //       title: "Facilities",
    //       url: "#",
    //     },
    //     {
    //       title: "Assets",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "📊 Reports & Analytics",
    //   url: "#",
    //   icon: PieChart,
    //   items: [
    //     {
    //       title: "Academic Reports",
    //       url: "#",
    //     },
    //     {
    //       title: "Financial Reports",
    //       url: "#",
    //     },
    //     {
    //       title: "Custom Reports",
    //       url: "#",
    //     },
    //     {
    //       title: "Analytics Dashboard",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "⚙️ Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "School Profile",
          url: "#",
        },
        {
          title: "User Management",
          url: "#",
        },
        {
          title: "System Settings",
          url: "#",
        },
        {
          title: "Backup & Security",
          url: "#",
        },
      ],
    },
  ];
  
    async function handleLogout() {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
            <SidebarMenuButton tooltip="School-Guru">
                  <Image src={school.logo} width={40} alt='schoolLogo' height={40}/><span>{school.name}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sidebarLinks.map((item) => (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
             <UserDropdownMenu
                        username={session?.user?.name ?? ""}
                        email={session?.user?.email ?? ""}
                        avatarUrl={
                          session?.user?.image ??
                          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(54)-NX3G1KANQ2p4Gupgnvn94OQKsGYzyU.png"
                        }
                      />
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
  )
}
