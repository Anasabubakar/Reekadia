import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ClientBackground from '@/components/layout/ClientBackground';

export const metadata: Metadata = {
  title: 'Reekadia - Official Home',
  description: 'Official website of Reekado Banks and Reekadia Records. The home of authentic Afrobeats music.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col bg-[#110505] text-white font-display overflow-x-hidden selection:bg-primary selection:text-white"
      >
        <ClientBackground />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
