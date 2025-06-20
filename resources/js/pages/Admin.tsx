import React from 'react';
import { AdminLayout } from '@/components/ui/admin-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, MessageSquare, Settings, Shield } from 'lucide-react';

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
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">+24 this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Study Rooms</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">7 active now</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Resources</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">546</div>
              <p className="text-xs text-gray-500 dark:text-gray-400">12 pending review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
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
          <TabsList className="grid grid-cols-5 max-w-2xl">
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
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">User</th>
                          <th scope="col" className="px-6 py-3">Email</th>
                          <th scope="col" className="px-6 py-3">Role</th>
                          <th scope="col" className="px-6 py-3">Status</th>
                          <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">John Doe</td>
                          <td className="px-6 py-4">john@example.com</td>
                          <td className="px-6 py-4">User</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                          </td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Jane Smith</td>
                          <td className="px-6 py-4">jane@example.com</td>
                          <td className="px-6 py-4">Admin</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
                          </td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm">Edit</Button>
                          </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Robert Johnson</td>
                          <td className="px-6 py-4">robert@example.com</td>
                          <td className="px-6 py-4">User</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Inactive</span>
                          </td>
                          <td className="px-6 py-4">
                            <Button variant="outline" size="sm">Edit</Button>
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
                <CardContent className="text-center p-6">
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
                <CardContent className="text-center p-6">
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
                <CardContent className="text-center p-6">
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
                <CardContent className="text-center p-6">
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
              <div className="p-4 border rounded-lg dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Maintenance Mode</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Enable during updates</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </div>
              </div>

              <div className="p-4 border rounded-lg dark:border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">API Settings</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage API keys and tokens</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
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
