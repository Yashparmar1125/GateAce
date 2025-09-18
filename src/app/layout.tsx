import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Providers } from '@/components/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'GateAce - AI-Powered GATE Preparation Platform',
  description: 'The most advanced AI-powered GATE preparation platform. Get personalized study plans, practice tests, and analytics to ace your GATE exam.',
  keywords: 'GATE, GATE preparation, AI study plans, practice tests, engineering, exam preparation',
  authors: [{ name: 'GateAce Team' }],
  openGraph: {
    title: 'GateAce - AI-Powered GATE Preparation',
    description: 'Join 50,000+ successful students who achieved their dream GATE scores with our AI-powered study plans.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased scroll-smooth">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
