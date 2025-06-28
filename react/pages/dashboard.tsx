import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/ui/dashboard-layout';
import { BarChart, LineChart, PieChart } from 'lucide-react';

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <div className="space-y-6">
                <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Current Courses</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-blue-600"
                            >
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">2 in progress, 1 not started</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Quiz Progress</CardTitle>
                            <PieChart className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">76%</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">+2% from last week</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                            <LineChart className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5 days</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Keep going!</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">XP Level</CardTitle>
                            <BarChart className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">Level 4</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">120 XP to next level</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your study activity from the past 7 days</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Completed "Introduction to Machine Learning" quiz</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Today at 10:30 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">AI Assistant summarized "Deep Learning Fundamentals"</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Yesterday at 3:15 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Joined study room "Python Coding Challenge"</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-blue-600"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">Earned "Fast Learner" badge</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">3 days ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Recommended Learning Paths */}
                <Card>
                    <CardHeader>
                        <CardTitle>Recommended Learning Paths</CardTitle>
                        <CardDescription>Based on your interests and activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="rounded-lg border p-4 dark:border-gray-800">
                                <h3 className="mb-1 font-medium">Data Science Career Path</h3>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    Master data analysis, visualization, and machine learning
                                </p>
                                <div className="flex items-center">
                                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                        <div className="h-2 w-[15%] rounded-full bg-blue-600"></div>
                                    </div>
                                    <span className="ml-2 text-xs">15%</span>
                                </div>
                            </div>
                            <div className="rounded-lg border p-4 dark:border-gray-800">
                                <h3 className="mb-1 font-medium">Full-Stack Web Development</h3>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Learn frontend, backend, and deployment</p>
                                <div className="flex items-center">
                                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                        <div className="h-2 w-[8%] rounded-full bg-blue-600"></div>
                                    </div>
                                    <span className="ml-2 text-xs">8%</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
