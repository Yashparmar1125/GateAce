'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { GateIcon } from '@/components/icons';
import { SIDENAV_ITEMS } from '@/lib/constants';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-border bg-sidebar-background">
      <SidebarHeader className="p-4">
        <Link href="/dashboard" className="flex items-center gap-2 group">
          <GateIcon className="size-8 shrink-0 text-primary group-hover:scale-110 transition-transform duration-300" />
          <span className="font-headline text-lg font-bold text-sidebar-foreground group-hover:text-primary transition-colors duration-300">GateAce</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarMenu className="space-y-2">
          {SIDENAV_ITEMS.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.path}
                tooltip={{ children: item.title, side: 'right' }}
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 hover:scale-105 data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground data-[active=true]:shadow-md"
              >
                <Link href={item.path} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              tooltip={{children: 'Logout', side: 'right'}}
              className="hover:bg-red-500/10 hover:text-red-500 transition-all duration-300 hover:scale-105"
            >
                <Link href="/" className="flex items-center gap-3">
                    <LogOut className="h-5 w-5" />
                    <span className="font-medium">Logout</span>
                </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
