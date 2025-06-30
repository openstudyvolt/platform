import React from 'react';
import { Head } from '@inertiajs/react';
import { Sidebar } from './sidebar-custom';
import { DashboardHeader } from './dashboard-header';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function DashboardLayout({ children, title = 'Dashboard', className }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  return (
    <>
      <Head title={title} />
      <div className="h-screen flex bg-gray-50 dark:bg-gray-900">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <div className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />

          <main className={cn(
            "flex-1 overflow-y-auto p-6",
            className
          )}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
