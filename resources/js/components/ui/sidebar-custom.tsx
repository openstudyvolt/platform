import React from 'react';
import { Link } from '@inertiajs/react';
import { Navigation } from './navigation';
import { Button } from './button';
import { PanelLeftClose, PanelLeft, Bell, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function Sidebar({ collapsed = false, onToggle, className }: SidebarProps) {
  return (
    <div className={cn(
      "flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300",
      collapsed ? "w-16" : "w-64",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        {!collapsed && (
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">SV</span>
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">StudyVolt</span>
          </Link>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          {collapsed ? <PanelLeft className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
        </Button>
      </div>

      {/* Quick Actions */}
      {!collapsed && (
        <div className="p-4 space-y-2 border-b border-gray-200 dark:border-gray-800">
          <Button variant="outline" size="sm" className="w-full justify-start gap-2">
            <Search className="h-4 w-4" />
            Quick Search
          </Button>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Notifications</span>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Bell className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <Navigation collapsed={collapsed} />
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        {!collapsed ? (
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            OpenStudyVolt v1.0.0
          </div>
        ) : (
          <div className="h-4"></div>
        )}
      </div>
    </div>
  );
}
