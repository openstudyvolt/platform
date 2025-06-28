import { AdminLayout } from '@/components/ui/admin-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, MessageSquare, Settings, Shield, Users } from 'lucide-react';

export default function Admin() {
    return (
        <AdminLayout title="Admin Panel">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">Admin Panel</h1>
                    <Button variant="outline" size="sm" className="gap-2">
                        <Shield className="h-4 w-4" />
                        System Status
                    </Button>
                </div>

                {/* Admin Stats */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,284</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">+24 this week</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Study Rooms</CardTitle>
                            <Users className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">32</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">7 active now</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Resources</CardTitle>
                            <BookOpen className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">546</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">12 pending review</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                            <MessageSquare className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">3 require urgent attention</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Admin Tabs */}
                <Tabs defaultValue="users" className="w-full">
                    <TabsList className="grid max-w-2xl grid-cols-5">
                        <TabsTrigger value="users">User Management</TabsTrigger>
                        <TabsTrigger value="rooms">Study Rooms</TabsTrigger>
                        <TabsTrigger value="experts">Expert Management</TabsTrigger>
                        <TabsTrigger value="resources">Resources</TabsTrigger>
                        <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    </TabsList>

                    <div className="mt-4">
                        <TabsContent value="users" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>User Management</CardTitle>
                                    <CardDescription>Manage platform users and permissions</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                                            <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        User
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Email
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Role
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Status
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">John Doe</td>
                                                    <td className="px-6 py-4">john@example.com</td>
                                                    <td className="px-6 py-4">User</td>
                                                    <td className="px-6 py-4">
                                                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">Active</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <Button variant="outline" size="sm">
                                                            Edit
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Jane Smith</td>
                                                    <td className="px-6 py-4">jane@example.com</td>
                                                    <td className="px-6 py-4">Admin</td>
                                                    <td className="px-6 py-4">
                                                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-800">Active</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <Button variant="outline" size="sm">
                                                            Edit
                                                        </Button>
                                                    </td>
                                                </tr>
                                                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Robert Johnson</td>
                                                    <td className="px-6 py-4">robert@example.com</td>
                                                    <td className="px-6 py-4">User</td>
                                                    <td className="px-6 py-4">
                                                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-800">Inactive</span>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <Button variant="outline" size="sm">
                                                            Edit
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="rooms" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Study Room Management</CardTitle>
                                    <CardDescription>Manage virtual study rooms and sessions</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-500 dark:text-gray-400">Study room management dashboard content</p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="experts" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Expert Management</CardTitle>
                                    <CardDescription>Manage subject matter experts and Q&A sessions</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-500 dark:text-gray-400">Expert management dashboard content</p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="resources" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Resource Management</CardTitle>
                                    <CardDescription>Manage learning resources and quiz content</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-500 dark:text-gray-400">Resource management dashboard content</p>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analytics" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Platform Analytics</CardTitle>
                                    <CardDescription>Platform usage statistics and reports</CardDescription>
                                </CardHeader>
                                <CardContent className="p-6 text-center">
                                    <p className="text-gray-500 dark:text-gray-400">Analytics dashboard content</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>

                {/* System Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle>System Settings</CardTitle>
                        <CardDescription>Global platform configuration options</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-lg border p-4 dark:border-gray-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">Maintenance Mode</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Enable during updates</p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Configure
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-lg border p-4 dark:border-gray-800">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="font-medium">API Settings</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Manage API keys and tokens</p>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Configure
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
