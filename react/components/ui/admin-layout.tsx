import React from 'react';
import { Head } from '@inertiajs/react';
import { Sidebar } from './sidebar-custom';
import { DashboardHeader } from './dashboard-header';
import { cn } from '@/lib/utils';

interface AdminLayoutProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function AdminLayout({ children, title = 'Admin Panel', className }: AdminLayoutProps) {
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

          <div className="p-4 bg-red-50 border-b border-red-200 dark:bg-red-900/20 dark:border-red-800">
            <p className="text-sm text-red-800 dark:text-red-300 font-medium">
              Admin Panel - You have elevated permissions
            </p>
          </div>

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
