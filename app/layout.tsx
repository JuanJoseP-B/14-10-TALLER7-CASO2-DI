import type { Metadata } from 'next';
import { Poppins, Dancing_Script } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-dancing-script',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Dakingo | Online Bakery for Every Celebration',
  description:
    'Satisfy your sweet cravings with Dakingo, your trusted FSSAI certified online bakery for every celebration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable}`}>
      <body className="min-h-screen bg-page font-sans text-text-body antialiased">
        {children}
      </body>
    </html>
  );
}
