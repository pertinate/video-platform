import Head from 'next/head';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/@/components/ui/card';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '~/@/components/ui/resizable';

import { api } from '~/utils/api';

export default function Home() {
    const hello = api.post.hello.useQuery({ text: 'from tRPC' });

    return (
        <>
            <Head>
                <title>Create T3 App</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex min-h-screen grow">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel>Two</ResizablePanel>
                </ResizablePanelGroup>
            </main>
        </>
    );
}
