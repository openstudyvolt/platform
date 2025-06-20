import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Trash2 } from 'lucide-react';

import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Social accounts',
        href: '/settings/social-accounts',
    },
];

type ConnectedAccount = {
    provider: string;
    provider_id: string;
    connected_at: string;
};

interface SocialAccountsProps {
    connectedAccounts: ConnectedAccount[];
    status?: string;
}

function getProviderDisplayName(provider: string): string {
    switch (provider) {
        case 'facebook':
            return 'Facebook';
        case 'twitter':
            return 'X (Twitter)';
        case 'linkedin-openid':
            return 'LinkedIn';
        case 'google':
            return 'Google';
        default:
            return provider.charAt(0).toUpperCase() + provider.slice(1);
    }
}

function getProviderIcon(provider: string): React.ReactNode {
    switch (provider) {
        case 'facebook':
            return (
                <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            );
        case 'twitter':
            return (
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            );
        case 'linkedin-openid':
            return (
                <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case 'google':
            return (
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                    />
                    <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                    />
                    <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                    />
                </svg>
            );
        default:
            return null;
    }
}

export default function SocialAccounts({ connectedAccounts, status }: SocialAccountsProps) {
    const { delete: destroy, processing } = useForm();

    const handleDisconnect = (provider: string): void => {
        destroy(route('settings.social-accounts.destroy', {
            'provider': provider,
        }), {
            preserveScroll: true,
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Social accounts" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Connected accounts"
                        description="Manage your connected social accounts"
                    />

                    {connectedAccounts.length === 0 ? (
                        <div className="text-sm text-muted-foreground">
                            No social accounts connected. You can connect a social account during login.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {connectedAccounts.map((account) => (
                                <Card key={account.provider}>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            <div className="flex items-center space-x-2">
                                                {getProviderIcon(account.provider)}
                                                <span>{getProviderDisplayName(account.provider)}</span>
                                            </div>
                                        </CardTitle>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDisconnect(account.provider)}
                                            disabled={processing}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            <span className="ml-2">Disconnect</span>
                                        </Button>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-xs text-muted-foreground">
                                            Connected on {new Date(account.connected_at).toLocaleDateString()}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}

                    {status === 'social-account-disconnected' && (
                        <div className="mt-4 text-sm font-medium text-green-600">
                            Social account disconnected successfully.
                        </div>
                    )}
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
