import type { Metadata } from 'next';
import { Be_Vietnam_Pro, Noto_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const beVietnamPro = Be_Vietnam_Pro({
  variable: '--font-be-vietnam-pro',
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Reekadia - Official Home',
  description: 'The official home of Reekado Banks & Reekadia Records.',
  icons: {
    icon: '/images/logo/reekadia-transparent.png',
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
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${beVietnamPro.variable} ${notoSans.variable} antialiased min-h-screen flex flex-col bg-[#110505] text-white font-display overflow-x-hidden selection:bg-primary selection:text-white`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}