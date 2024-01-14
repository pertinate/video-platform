import { Html, Head, Main, NextScript } from 'next/document';
import { cn } from '~/@/lib/utils';
import { ThemeProvider } from '~/components/themeProvider';

export default function Document() {
    return (
        <Html lang="en" suppressHydrationWarning>
            <Head />
            <body className={cn('min-h-screen bg-background font-sans antialiased')}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <Main />
                </ThemeProvider>
                <NextScript />
            </body>
        </Html>
    );
}
