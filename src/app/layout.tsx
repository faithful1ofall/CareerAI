import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sensay AI Chat Sample',
  description: 'A sample project demonstrating integration with the Sensay AI API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen max-w-6xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}