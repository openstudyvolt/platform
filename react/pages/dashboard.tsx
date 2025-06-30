import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/ui/dashboard-layout';
import { BarChart, LineChart, PieChart } from 'lucide-react';

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard">
            <div className="space-y-8">
                <h1 className="text-h1 font-bold text-text-primary mb-4">Dashboard</h1>

                {/* Summary Cards */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">Current Courses</CardTitle>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="h-4 w-4 text-primary"
                            >
                                <path d="M12 2v20M2 12h20" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-text-primary">3</div>
                            <p className="text-base text-text-secondary">2 in progress, 1 not started</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">Quiz Progress</CardTitle>
                            <PieChart className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-text-primary">76%</div>
                            <p className="text-base text-text-secondary">+2% from last week</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">Study Streak</CardTitle>
                            <LineChart className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-text-primary">5 days</div>
                            <p className="text-base text-text-secondary">Keep going!</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-base font-medium">XP Level</CardTitle>
                            <BarChart className="h-4 w-4 text-primary" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-text-primary">Level 4</div>
                            <p className="text-base text-text-secondary">120 XP to next level</p>
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
                                <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                                <div className="flex-1">
                                    <p className="text-base font-medium text-text-primary">Completed "Introduction to Machine Learning" quiz</p>
                                    <p className="text-sm text-text-secondary">Today at 10:30 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                                <div className="flex-1">
                                    <p className="text-base font-medium text-text-primary">AI Assistant summarized "Deep Learning Fundamentals"</p>
                                    <p className="text-sm text-text-secondary">Yesterday at 3:15 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                                <div className="flex-1">
                                    <p className="text-base font-medium text-text-primary">Joined study room "Python Coding Challenge"</p>
                                    <p className="text-sm text-text-secondary">2 days ago</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-2 h-2 w-2 rounded-full bg-primary"></div>
                                <div className="flex-1">
                                    <p className="text-base font-medium text-text-primary">Earned "Fast Learner" badge</p>
                                    <p className="text-sm text-text-secondary">3 days ago</p>
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
                            <div className="rounded-xl border border-border p-6 bg-surface shadow-sm">
                                <h3 className="mb-2 text-base font-medium text-text-primary">Data Science Career Path</h3>
                                <p className="mb-4 text-base text-text-secondary">
                                    Master data analysis, visualization, and machine learning
                                </p>
                                <div className="flex items-center">
                                    <div className="h-2 w-full rounded-full bg-background">
                                        <div className="h-2 w-[15%] rounded-full bg-primary"></div>
                                    </div>
                                    <span className="ml-2 text-sm text-text-secondary">15%</span>
                                </div>
                            </div>
                            <div className="rounded-xl border border-border p-6 bg-surface shadow-sm">
                                <h3 className="mb-2 text-base font-medium text-text-primary">Full-Stack Web Development</h3>
                                <p className="mb-4 text-base text-text-secondary">Learn frontend, backend, and deployment</p>
                                <div className="flex items-center">
                                    <div className="h-2 w-full rounded-full bg-background">
                                        <div className="h-2 w-[8%] rounded-full bg-primary"></div>
                                    </div>
                                    <span className="ml-2 text-sm text-text-secondary">8%</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
