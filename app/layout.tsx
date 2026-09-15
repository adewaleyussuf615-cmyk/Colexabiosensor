import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import { Footer, Header } from '@/components/site-shell';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Colexa Biosensor',
    template: '%s | Colexa Biosensor',
  },
  description: 'Colexa Biosensor delivers medical devices and in-vitro diagnostics made in Nigeria.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
