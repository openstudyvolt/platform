import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { DashboardLayout } from '@/components/ui/dashboard-layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Bot, Download, History, Link2, Save, Upload } from 'lucide-react';
import React from 'react';

export default function StudyAssistant() {
    const [inputText, setInputText] = React.useState('');
    const [isProcessing, setIsProcessing] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate API call
        setTimeout(() => {
            setIsProcessing(false);
        }, 2000);
    };

    return (
        <DashboardLayout title="Study Assistant">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold tracking-tight">AI Study Assistant</h1>
                    <Button variant="outline" size="sm" className="gap-2">
                        <History className="h-4 w-4" />
                        History
                    </Button>
                </div>

                <Tabs defaultValue="paste" className="w-full">
                    <TabsList className="grid max-w-md grid-cols-3">
                        <TabsTrigger value="paste">Paste Text</TabsTrigger>
                        <TabsTrigger value="upload">Upload Document</TabsTrigger>
                        <TabsTrigger value="url">URL / Link</TabsTrigger>
                    </TabsList>

                    <div className="mt-4">
                        <TabsContent value="paste" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Paste your text</CardTitle>
                                    <CardDescription>Paste any text you want to analyze, summarize, or study</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <textarea
                                            className="h-40 w-full rounded-md border bg-white p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800"
                                            placeholder="Paste your text here..."
                                            value={inputText}
                                            onChange={(e) => setInputText(e.target.value)}
                                        />
                                        <div className="mt-4 flex justify-end">
                                            <Button type="submit" disabled={isProcessing || !inputText}>
                                                {isProcessing ? 'Processing...' : 'Analyze'}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="upload" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Upload document</CardTitle>
                                    <CardDescription>Upload PDF, DOCX, or TXT files to analyze</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="rounded-lg border-2 border-dashed border-gray-300 p-10 text-center dark:border-gray-700">
                                        <div className="flex flex-col items-center justify-center space-y-2">
                                            <Upload className="h-8 w-8 text-gray-400" />
                                            <h3 className="text-lg font-medium">Drag & drop file</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">or</p>
                                            <Button variant="outline" size="sm">
                                                Browse files
                                            </Button>
                                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Supports PDF, DOCX, TXT (max 10MB)</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="url" className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Add URL</CardTitle>
                                    <CardDescription>Provide a link to an article or webpage to analyze</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit}>
                                        <div className="flex gap-2">
                                            <div className="relative flex-1">
                                                <Link2 className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                                <input
                                                    type="url"
                                                    className="w-full rounded-md border bg-white py-2 pr-4 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800"
                                                    placeholder="https://example.com/article"
                                                />
                                            </div>
                                            <Button type="submit">Analyze</Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </div>
                </Tabs>

                {/* Results Section */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Summary</CardTitle>
                            <CardDescription>AI-generated summary of the content</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Submit content to generate a concise summary.</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                                <Save className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                            <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Export
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Study Notes</CardTitle>
                            <CardDescription>Key points and study notes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-md bg-gray-50 p-4 dark:bg-gray-800">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Submit content to generate organized study notes.</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">
                                <Save className="mr-2 h-4 w-4" />
                                Save
                            </Button>
                            <Button variant="outline" size="sm">
                                <Download className="mr-2 h-4 w-4" />
                                Export
                            </Button>
                        </CardFooter>
                    </Card>
                </div>

                {/* Resource Suggestions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Resource Suggestions</CardTitle>
                        <CardDescription>Related materials to enhance your learning</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="p-6 text-center">
                            <Bot className="mx-auto h-12 w-12 text-gray-400" />
                            <h3 className="mt-2 text-lg font-medium">No suggestions yet</h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Analyze content to get personalized resource suggestions</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
}
