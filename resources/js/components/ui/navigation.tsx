import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
  Home,
  BarChart3,
  Bot,
  Trophy,
  Users,
  Map,
  Puzzle,
  Globe,
  Download,
  HelpCircle,
  GraduationCap,
  Settings,
  ChevronDown,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: string;
  children?: NavigationItem[];
  role?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'Overview of your learning progress'
  },
  {
    name: 'Study Assistant',
    href: '/study-assistant',
    icon: Bot,
    description: 'AI-powered learning companion',
    badge: 'AI'
  },
  {
    name: 'Learning Paths',
    href: '/learning-paths',
    icon: Map,
    description: 'Personalized study roadmaps'
  },
  {
    name: 'Adaptive Quizzes',
    href: '/quizzes',
    icon: GraduationCap,
    description: 'Smart practice questions'
  },
  {
    name: 'Virtual Study Rooms',
    href: '/study-rooms',
    icon: Users,
    description: 'Collaborative learning spaces'
  },
  {
    name: 'Gamification',
    href: '/gamification',
    icon: Trophy,
    description: 'Badges, levels & achievements'
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: BarChart3,
    description: 'Detailed progress insights'
  },
  {
    name: 'Expert Q&A',
    href: '/expert-qa',
    icon: HelpCircle,
    description: 'Live sessions with experts'
  },
  {
    name: 'Offline Library',
    href: '/offline-library',
    icon: Download,
    description: 'Downloaded content'
  },
  {
    name: 'Tools & Settings',
    href: '#',
    icon: Settings,
    children: [
      {
        name: 'Integrations',
        href: '/integrations',
        icon: Puzzle,
        description: 'Connect external tools'
      },
      {
        name: 'Multilingual Settings',
        href: '/language-settings',
        icon: Globe,
        description: 'Language preferences'
      },
      {
        name: 'Account Settings',
        href: '/settings',
        icon: Settings,
        description: 'Profile & preferences'
      }
    ]
  },
  {
    name: 'Admin Panel',
    href: '/admin',
    icon: ShieldCheck,
    description: 'Moderation and management',
    role: 'admin'
  }
];

interface NavigationProps {
  className?: string;
  collapsed?: boolean;
}

export function Navigation({ className, collapsed = false }: NavigationProps) {
  const { url, auth } = usePage().props as any;
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActiveRoute = (href: string) => {
    if (href === '/dashboard') return url === '/dashboard';
    if (! url) return false;
    return url.startsWith(href) && href !== '#';
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    // Skip rendering items that require an admin role if user isn't admin
    if (item.role === 'admin' && auth?.user?.role !== 'admin') {
      return null;
    }

    const isActive = isActiveRoute(item.href);
    const isExpanded = expandedItems.includes(item.name);
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.name} className={cn("space-y-1")}>
        {item.href === '#' ? (
          <button
            onClick={() => toggleExpanded(item.name)}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
              "text-gray-700 hover:text-gray-900 hover:bg-gray-100",
              "dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800",
              level > 0 && "ml-4"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <>
                <span className="flex-1 text-left">{item.name}</span>
                {hasChildren && (
                  isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                )}
              </>
            )}
          </button>
        ) : (
          <Link
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
              isActive
                ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800",
              level > 0 && "ml-4"
            )}
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!collapsed && (
              <>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded dark:bg-blue-900/50 dark:text-blue-300">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {item.description}
                    </div>
                  )}
                </div>
              </>
            )}
          </Link>
        )}

        {hasChildren && isExpanded && !collapsed && (
          <div className="space-y-1">
            {item.children?.map(child => renderNavigationItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={cn("space-y-2", className)}>
      {navigationItems.map(item => renderNavigationItem(item))}
    </nav>
  );
}
